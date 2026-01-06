// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://sogrub.github.io",
  base: "/my-portfolio",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
        prefixDefaultLocale: false,
        redirectToDefaultLocale: true
    }
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [".tunnelmole.net"]
    }
  }
});