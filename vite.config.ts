import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    /* '@' -> './src' для чистых абсолютных импортов внутри проект (в 3 местах, vite.config + tsconfig.app + eslint.config)*/
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
