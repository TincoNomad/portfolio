// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // passthrough: no usamos <Image>, así no hace falta el binding IMAGES al desplegar
  adapter: cloudflare({ imageService: "passthrough" }),
  session: false,
  vite: {
    plugins: [tailwindcss()],
  },
});
