/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'rgb(74 108 247 / var(--tw-bg-opacity))'
      },
      colors: {
        bgCustom: '#090e34',
        dark: '#1d2144',
        primary: '#4a6cf7',
        secondary: '#ff49db',
        bodyColor: '#959cb1',
        primary08: '#4a6cf708',
        primaryButton: '#4a6cf7cc',
        yellow: '#fbb040'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
