import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { hashPassword, noteKey, notes, randomSalt, toSlug } from '../../lib/notes';

export const prerender = false;

const ID_PREFIX = 'id:';

const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
        status,
        headers: { 'content-type': 'application/json' },
    });

/** Sin API_SECRET no hay API: fallar cerrado es más seguro que abrir todo.
 *  Para desarrollo local, define API_SECRET en .dev.vars. */
function unauthorized(request: Request): boolean {
    const secret = (env as unknown as { API_SECRET?: string }).API_SECRET;
    if (!secret) return true;
    return request.headers.get('authorization') !== `Bearer ${secret}`;
}

/** 8 caracteres al azar: sin esto el link sería adivinable a partir del título.
 *  Hoy queda sin uso: ver publicSlugFor(). */
function randomToken(length = 8): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const bytes = crypto.getRandomValues(new Uint8Array(length));
    return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join('');
}

/** Slug público de una nota, reutilizando el que ya tuviera. */
async function publicSlugFor(plain: string, create: boolean): Promise<string | null> {
    // TODO(seguridad): descomentar estas tres líneas para que cada nota lleve
    // un token aleatorio y no se pueda llegar con el slug a secas.
    // const existing = await notes().get(`${ID_PREFIX}${plain}`);
    // if (existing || !create) return existing;
    // return `${plain}-${randomToken()}`;

    const published = await notes().get(noteKey(plain));
    if (!create && !published) return null;
    return plain;
}

export const POST: APIRoute = async ({ request }) => {
    if (unauthorized(request)) return json({ error: 'unauthorized' }, 401);

    const body = (await request.json().catch(() => null)) as {
        slug?: string;
        title?: string;
        html?: string;
        password?: string;
    } | null;

    if (!body?.slug || typeof body.html !== 'string' || !body.html.trim()) {
        return json({ error: 'slug y html son obligatorios' }, 400);
    }

    const plain = toSlug(body.slug);
    if (!plain) return json({ error: 'slug inválido' }, 400);

    const slug = await publicSlugFor(plain, true);
    if (!slug) return json({ error: 'no se pudo generar el slug' }, 500);

    // Sin title explícito, el título es el nombre original (antes de slugificar)
    const title = body.title?.trim() || body.slug.trim() || plain;

    // Si la nota ya tenía contraseña y no se manda una nueva, se conserva: republicar
    // sin querer no debe desproteger una cotización que ya estaba cerrada.
    const previous = (await notes().getWithMetadata(noteKey(slug))).metadata;
    let passwordHash = previous?.passwordHash;
    let passwordSalt = previous?.passwordSalt;

    if (typeof body.password === 'string' && body.password.length > 0) {
        if (body.password.length < 12) {
            return json({ error: 'la contraseña debe tener al menos 12 caracteres' }, 400);
        }
        passwordSalt = randomSalt();
        passwordHash = await hashPassword(body.password, passwordSalt);
    }

    await notes().put(`${ID_PREFIX}${plain}`, slug);
    await notes().put(noteKey(slug), body.html, {
        metadata: {
            title,
            updatedAt: new Date().toISOString(),
            passwordHash,
            passwordSalt,
        },
    });

    return json({ ok: true, url: `/${slug}`, protected: Boolean(passwordHash) });
};

export const GET: APIRoute = async ({ request, url }) => {
    if (unauthorized(request)) return json({ error: 'unauthorized' }, 401);

    const plain = toSlug(url.searchParams.get('slug') ?? '');
    if (!plain) return json({ error: 'slug inválido' }, 400);

    const slug = await publicSlugFor(plain, false);
    if (!slug) return json({ error: 'esa nota no está publicada' }, 404);

    return json({ ok: true, url: `/${slug}` });
};

export const DELETE: APIRoute = async ({ request, url }) => {
    if (unauthorized(request)) return json({ error: 'unauthorized' }, 401);

    const plain = toSlug(url.searchParams.get('slug') ?? '');
    if (!plain) return json({ error: 'slug inválido' }, 400);

    const slug = await publicSlugFor(plain, false);

    // Se borran las dos llaves: la del mapeo y la del slug plano, por si quedó
    // huérfana de una publicación anterior. Un borrado que deja la nota pública es peor
    // que no borrar.
    await notes().delete(noteKey(slug ?? plain));
    if (slug) await notes().delete(noteKey(plain));
    await notes().delete(`${ID_PREFIX}${plain}`);

    return json({ ok: true });
};
