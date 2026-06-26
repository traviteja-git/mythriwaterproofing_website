/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#16181D', light: '#1F2127', dark: '#0E0F12' },
        accent:  { DEFAULT: '#DC1F26', light: '#E5484D', dark: '#B5161C' },
        water:   { DEFAULT: '#1FA0DE', light: '#5FC4ED', dark: '#1577AE' },
        paper:   '#F7F5F2',
        line:    '#E7E3DD',
        muted:   '#5A5C63',
      },
      fontFamily: {
        sans:    ['"Public Sans"', 'sans-serif'],
        display: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
