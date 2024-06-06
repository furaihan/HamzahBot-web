/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
      },
      colors: {
        'purple-750': '#5e38c8',
        'dark-200': '#272934',
        'discord': '#5865f2'
      },
      keyframes: {
      },
      letterSpacing: {
        widest: '0.2em'
      },
      height: {
        'screen-set': '88vh'
      },
      fontSize: {
        'md': ['15px', {
          lineHeight: '22px'
        }]
      },
      width: {
        '86': '350px'
      },
      height: {
        
      }
    },
  },
  plugins: [],
}

