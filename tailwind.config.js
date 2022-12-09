/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1A0DAB',
          secondary: '#006621',
          accent: '#F5F5F5',
          neutral: '#4D90FE',
          'base-100': '#ffffff'
        }
      },
      'dark',
      'cupcake'
    ]
  },
  plugins: [require('daisyui')]
}
