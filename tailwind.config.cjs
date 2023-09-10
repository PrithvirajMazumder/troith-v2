/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: ['bg-warning', 'bg-success', 'bg-primary', 'bg-info'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
