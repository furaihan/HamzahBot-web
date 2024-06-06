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
      backgroundImage: {
        'main-content1': "url('/src/assets/shine.png')",
        'main-content2': "url('/src/assets/main_decoration.png')",
        'hero-content': "url('/src/assets/hero.png')"
      },
      width: {
        '75': '75%'
      },
    },
  },
  plugins: [
    
  ],
}

