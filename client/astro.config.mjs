import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: 'ltujpn1b',
      dataset: 'production',
      apiVersion: '2024-03-21',
      useCdn: false,
    }),
    tailwind(),
  ],
  output: 'server',
  adapter: netlify()
});
