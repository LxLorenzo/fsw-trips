/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search-background': 'url(/world-map.png)',
        'search-background-dark': 'url(/world-map-dark.svg)',
      },
      colors: {
        primary: '#590BD8',
        primaryDarker: '#312A4F',
        primaryLighter: '#DDD5EA',
        grayPrimary: '#717171',
        graySecondary: '#BBBFBF',
        grayTerciary: '#333333',
        walterWhite: '#F5F5F5',
        cancelRed: '#FE3838',
      },
      textColor: {
        dark: '#717171',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
