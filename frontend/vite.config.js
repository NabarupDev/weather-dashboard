import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Add babel configuration to remove console statements in production
      babel: {
        plugins: [
          process.env.NODE_ENV === 'production' 
            ? ['transform-remove-console', { exclude: ['error'] }] 
            : null
        ].filter(Boolean)
      }
    }),
    tailwindcss()
  ],
  // Disable source maps in production
  build: {
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Ensure no server logs are exposed
  server: {
    cors: true,
    hmr: {
      overlay: false
    }
  },
  define: {
    // Define global constants for disabling logging
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    'process.env.DISABLE_CONSOLE': JSON.stringify(process.env.NODE_ENV === 'production')
  },
  // Enable environment variables from .env
  envPrefix: 'VITE_'
})
