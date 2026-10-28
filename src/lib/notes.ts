import { env } from 'cloudflare:workers';

const NOTE_PREFIX = 'note:';

export interface NoteMeta {
    title: string;
    updatedAt: string;
    passwordHash?: string;
    passwordSalt?: string;
}

/** Lo mínimo de KVNamespace que usamos, sin depender de @cloudflare/workers-types */
export interface NoteStore {
    get(key: string): Promise<string | null>;
    getWithMetadata(
        key: string,
    ): Promise<{ value: string | null; metadata: NoteMeta | null }>;
    put(key: string, value: string, options?: { metadata?: NoteMeta }): Promise<void>;
    delete(key: string): Promise<void>;
    list(
        options?: { prefix?: string },
    ): Promise<{ keys: Array<{ name: string; metadata?: NoteMeta }> }>;
}

export const notes = () => env.NOTES as unknown as NoteStore;

export const noteKey = (slug: string) => `${NOTE_PREFIX}${slug}`;

/** "Cotización — Sistema de reservas Pilates" -> "cotizacion-sistema-de-reservas-pilates" */
export function toSlug(input: string): string {
    return input
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

const encoder = new TextEncoder();

const toHex = (buffer: ArrayBuffer) =>
    Array.from(new Uint8Array(buffer), (b) => b.toString(16).padStart(2, '0')).join('');

export function randomSalt(): string {
    return toHex(crypto.getRandomValues(new Uint8Array(16)).buffer);
}

/**
 * SHA-256 de una sola pasada. No es PBKDF2: el plan gratis de Workers da 10 ms de
 * CPU por petición y PBKDF2 no cabe. Sirve para no guardar la clave en texto plano.
 */
export async function hashPassword(password: string, salt: string): Promise<string> {
    const digest = await crypto.subtle.digest('SHA-256', encoder.encode(`${salt}:${password}`));
    return toHex(digest);
}

/** Comparación de tiempo constante, para no filtrar cuántos caracteres acertó. */
export function safeEqual(a: string, b: string): boolean {
    if (a.length !== b.length) return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
    return diff === 0;
}

/**
 * Sin API_SECRET configurado se usa esta clave: alcanza para local, no para
 * producción. Allá hay que correr `wrangler secret put API_SECRET`.
 */
export function sessionSecret(): string {
    return (env as unknown as { API_SECRET?: string }).API_SECRET ?? 'dev-only-insecure';
}

export async function signSession(
    slug: string,
    passwordHash: string,
    expiresAt: number,
): Promise<string> {
    const key = await crypto.subtle.importKey(
        'raw',
        encoder.encode(sessionSecret()),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign'],
    );
    const signature = await crypto.subtle.sign(
        'HMAC',
        key,
        encoder.encode(`${slug}:${passwordHash}:${expiresAt}`),
    );
    return `${expiresAt}.${toHex(signature)}`;
}

/** La firma incluye el hash de la clave: cambiarla invalida las sesiones abiertas. */
export async function verifySession(
    cookie: string | undefined,
    slug: string,
    passwordHash: string,
): Promise<boolean> {
    if (!cookie) return false;
    const [expiresRaw] = cookie.split('.');
    const expiresAt = Number(expiresRaw);
    if (!Number.isFinite(expiresAt) || expiresAt < Date.now()) return false;
    return safeEqual(cookie, await signSession(slug, passwordHash, expiresAt));
}
