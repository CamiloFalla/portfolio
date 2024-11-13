const { Warning } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Asegúrate de que esta ruta incluya todos tus archivos Astro y componentes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b5345',
        accent: '#1d8348',
        dark: '#797d7f ',
        secondary: '#16a085',
        background: '#fdfefe',
        muted: '#34495e',
        warning: '#7b241c',
        success: '#1d8348',
        info: '#212f3d'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
