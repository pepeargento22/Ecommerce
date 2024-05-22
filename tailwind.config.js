/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontSize: {
      xs: ['10px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['48px', '1'],
      '4xl': ['52px', '1']
    },
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(300px, 1fr))'
      },
      maxHeight: {
        '100': '30rem'
      },
      boxShadow: {
        inner: 'inset 2px 4px 10px 0'
      }
    },
  },
  plugins: [],
}

