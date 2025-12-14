// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
  },
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    react({
      experimentalReactChildren: true,
    }),
    vue(),
    svelte(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
