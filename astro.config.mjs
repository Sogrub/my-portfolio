// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/Sogrub/my-portfolio",
  base: "/my-portfolio",
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [".tunnelmole.net"]
    }
  }
});