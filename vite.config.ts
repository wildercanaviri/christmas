import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        // Opciones de configuración de SASS
      },
    },
  },
  server: {
    proxy: {
      '/api/zenquotes': {
        target: 'https://zenquotes.io/api/random',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
