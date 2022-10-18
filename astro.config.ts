import { defineConfig } from 'astro/config';
import deno from "@astrojs/deno";
import solidJS from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';


import solidPlugin from "vite-plugin-solid";
import suidPlugin from "@suid/vite-plugin";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJS(), tailwind()],
  output: 'server',
  adapter: deno({
    port: 8000,
    // hostname: 'xezarindo'
  }),
  vite: {
    plugins: [suidPlugin(), solidPlugin()],
    build: {
      target: "esnext",
    },
  }
});