import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from "@astrojs/netlify/functions";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  server: {
      headers: {
          "Access-Control-Allow-Origin": "https://identity.netlify.com/v1/netlify-identity-widget.js"
      }
  },
  adapter: netlify(),
  site: 'https://fiendtech.com',
  integrations: [mdx(), sitemap(), tailwind()]
});