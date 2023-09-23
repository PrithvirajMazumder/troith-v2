/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'bg-warning',
    'bg-success',
    'bg-primary',
    'bg-info',
    'steps-vertical',
    'step-success',
    'step-primary',
    'font-extrabold',
    'cursor-pointer',
    'shadow-[0_0_0_2px]',
    'shadow-primary',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
