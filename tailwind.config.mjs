/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A1A',
          light:   '#333333',
          dark:    '#0F0F0F',
        },
        accent: {
          DEFAULT: '#CC1F1F',
          dark:    '#A81818',
        },
        water: '#1B72C0',
        ink: {
          DEFAULT: '#1A1A1A',
          mid:     '#444444',
          muted:   '#666666',
          subtle:  '#999999',
        },
        bg: {
          light:  '#F7F7F7',
          warm:   '#F9F9F9',
          soft:   '#F2F2F2',
        },
        line:  '#E0E0E0',
        brand: '#111111',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans:    ['"Public Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
