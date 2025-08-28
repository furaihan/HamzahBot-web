import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // load only the env for this mode and prefix with VITE_ is available via import.meta.env
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [svelte(), tailwindcss()],
    define: {
      // Only expose specific env vars if needed. Example: VITE_DISCORD_OAUTH_URL
      'process.env.DISCORD_OAUTH_URL': JSON.stringify(env.DISCORD_OAUTH_URL ?? ''),
    },
  }
})
