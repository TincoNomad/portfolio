#!/usr/bin/env bash
# Genera public/cv.pdf imprimiendo /cv con Chrome.
#
# Necesita el servidor levantado en otra terminal:
#   pnpm preview        (puerto 4321)
#
# Uso:
#   ./scripts/cv-pdf.sh
#
# No se genera desde file:// a propósito: Astro compila los assets con rutas
# absolutas y en file:// salen en blanco.
set -euo pipefail

PUERTO="${PUERTO:-4321}"
SALIDA="public/cv.pdf"
URL="http://localhost:${PUERTO}/cv"

CHROME=$(ls -d "$HOME"/Library/Caches/ms-playwright/chromium-*/chrome-mac-arm64/"Google Chrome for Testing.app"/Contents/MacOS/"Google Chrome for Testing" 2>/dev/null | tail -1)
if [ -z "${CHROME:-}" ] || [ ! -x "$CHROME" ]; then
  CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
fi
if [ ! -x "$CHROME" ]; then
  echo "error: no encontré Chrome (ni el de Playwright ni el del sistema)" >&2
  exit 1
fi

if ! curl -sf -o /dev/null "$URL"; then
  echo "error: $URL no responde. Levanta el servidor con: pnpm preview" >&2
  exit 1
fi

"$CHROME" \
  --headless \
  --disable-gpu \
  --no-pdf-header-footer \
  --virtual-time-budget=5000 \
  --print-to-pdf="$SALIDA" \
  "$URL"

echo "listo: $SALIDA"
