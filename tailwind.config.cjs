module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e6f3ff',
          200: '#bfe0ff',
          300: '#99ccff',
          400: '#66aaff',
          500: '#2d7cff',
          600: '#1f5fe6',
          700: '#184db4',
          800: '#123882',
          900: '#0b2450'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
