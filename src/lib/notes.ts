import { env } from 'cloudflare:workers';

const NOTE_PREFIX = 'note:';

export interface NoteMeta {
    title: string;
    updatedAt: string;
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
