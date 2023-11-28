/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      'primary': '#004C97',
      'secondary': '#FFFFFF',
      'bg-dark': '#02020A',
      'txt-light': '#FFFFFF',
      'txt-dark': '#000000',
      'accent': '#FFD700',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
};
export const plugins = [];

