import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/BTC/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aiPocket: resolve(__dirname, 'ai-pocket.html'),
        shopDrops: resolve(__dirname, 'shop-drops.html'),
      },
    },
  },
})
