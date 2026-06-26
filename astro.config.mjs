// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://traviteja.github.io',
  base: isProd ? '/mythriwaterproofing_website/' : '/',
});
