import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // load only the env for this mode and prefix with VITE_ is available via import.meta.env
  const env = loadEnv(mode, process.cwd(), '');
  const isProduction = mode === 'production';

  return {
    plugins: [
      svelte(), 
      tailwindcss(),
      // Add compression for production builds
      ...(isProduction ? [
        compression({
          algorithm: 'gzip',
          ext: '.gz',
        }),
        compression({
          algorithm: 'brotliCompress',
          ext: '.br',
        })
      ] : [])
    ],
    define: {
      // Only expose specific env vars if needed. Example: VITE_DISCORD_OAUTH_URL
      'process.env.DISCORD_OAUTH_URL': JSON.stringify(env.DISCORD_OAUTH_URL ?? ''),
    },
    build: {
      // Enable compression and minification for production
      minify: isProduction ? 'terser' : false,
      cssMinify: isProduction,
      
      // Configure rollup options for code splitting and vendor chunking
      rollupOptions: {
        output: {
          // Create separate chunks for vendor libraries
          manualChunks: {
            vendor: ['svelte'],
            utils: ['svelte/store', 'svelte/internal']
          },
          
          // Optimize chunk naming for better caching
          chunkFileNames: (chunkInfo) => {
            if (chunkInfo.name === 'vendor') {
              return 'assets/vendor-[hash].js';
            }
            return 'assets/[name]-[hash].js';
          },
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      },
      
      // Enable tree-shaking
      treeshake: isProduction,
      
      // Optimize for production
      target: 'es2020',
      cssCodeSplit: true,
      
      // Configure compression
      reportCompressedSize: isProduction,
      
      // Optimize asset handling
      assetsInlineLimit: 4096 // Inline assets smaller than 4kb
    },
    
    // Enable environment-specific optimizations
    optimizeDeps: {
      include: ['svelte/store']
    },
    
    // Configure server for development
    server: {
      fs: {
        // Allow serving files from one level up
        allow: ['..']
      }
    }
  }
})
