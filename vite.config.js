import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    // Inline assets smaller than 4kb to reduce requests
    assetsInlineLimit: 4096,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minify with esbuild (faster than terser, good output)
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Split vendor deps into separate chunk for better caching
        manualChunks: {
          emailjs: ['@emailjs/browser'],
          axios: ['axios'],
        },
        // Cache-friendly file names with content hashes
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    // Warn when chunk exceeds 400kb
    chunkSizeWarningLimit: 400,
  },
})