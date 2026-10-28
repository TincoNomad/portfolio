import type { APIRoute } from 'astro';
import { hashPassword, noteKey, notes, safeEqual, signSession, toSlug } from '../../../lib/notes';

export const prerender = false;

const SESSION_SECONDS = 60 * 60 * 24 * 7;

/** Form normal, sin JS: verifica, pone la cookie y vuelve a la nota con un 303. */
export const POST: APIRoute = async ({ request, url, cookies, redirect }) => {
    const form = await request.formData();
    const slug = toSlug(String(form.get('slug') ?? ''));
    const password = String(form.get('password') ?? '');

    const back = (query = '') => redirect(`/${slug}${query}`, 303);
    if (!slug) return redirect('/404', 303);

    const { value, metadata } = await notes().getWithMetadata(noteKey(slug));
    if (!value) return back('?error=1');

    // Nota sin contraseña: no hay nada que desbloquear.
    if (!metadata?.passwordHash || !metadata.passwordSalt) return back();

    const attempt = await hashPassword(password, metadata.passwordSalt);
    if (!safeEqual(attempt, metadata.passwordHash)) return back('?error=1');

    const expiresAt = Date.now() + SESSION_SECONDS * 1000;
    const token = await signSession(slug, metadata.passwordHash, expiresAt);

    cookies.set('access', token, {
        path: `/${slug}`,
        httpOnly: true,
        sameSite: 'lax',
        secure: url.protocol === 'https:',
        maxAge: SESSION_SECONDS,
    });

    return back();
};
