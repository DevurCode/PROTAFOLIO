// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    devToolbar: {enabled: false},
    output: 'static',
    adapter: netlify(),
    integrations: [tailwind()]
});