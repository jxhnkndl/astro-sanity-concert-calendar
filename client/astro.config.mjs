import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: 'ltujpn1b',
      dataset: 'production',
      apiVersion: '2024-03-21',
      useCdn: false,
    }),
  ],
});
