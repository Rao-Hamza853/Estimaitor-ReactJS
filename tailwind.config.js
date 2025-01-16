/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xsm': '375px',
       'xsm': '425px',
       'sm' : '640px',
       'md' : '768px',
       'lg' : '1024px',
       'xl' : '1280px',
      '2xl' : '1366px',
      '3xl' : '1440px',
      },
    extend: {},
  },
  plugins: [
    require('tailwindcss-motion'),
    require('tailwind-scrollbar')
  ], 
}

