#!/usr/bin/env bash
# Genera los PDF del CV imprimiendo /cv y /es/cv con Chrome.
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
BASE="http://localhost:${PUERTO}"

CHROME=$(ls -d "$HOME"/Library/Caches/ms-playwright/chromium-*/chrome-mac-arm64/"Google Chrome for Testing.app"/Contents/MacOS/"Google Chrome for Testing" 2>/dev/null | tail -1)
if [ -z "${CHROME:-}" ] || [ ! -x "$CHROME" ]; then
  CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
fi
if [ ! -x "$CHROME" ]; then
  echo "error: no encontré Chrome (ni el de Playwright ni el del sistema)" >&2
  exit 1
fi

generar() {
  local ruta="$1"
  local salida="$2"

  if ! curl -sf -o /dev/null "${BASE}${ruta}"; then
    echo "error: ${BASE}${ruta} no responde. Levanta el servidor con: pnpm preview" >&2
    exit 1
  fi

  mkdir -p "$(dirname "$salida")"
  "$CHROME" \
    --headless \
    --disable-gpu \
    --no-pdf-header-footer \
    --virtual-time-budget=5000 \
    --print-to-pdf="$salida" \
    "${BASE}${ruta}"

  echo "listo: $salida"
}

generar "/cv" "public/cv.pdf"
generar "/es/cv" "public/es/cv.pdf"
