import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 6548,
    host: '0.0.0.0',
    allowedHosts: ['blush.cyberpunk.co.in', 'localhost']
  },
  preview: {
    port: 6548,
    host: '0.0.0.0',
    allowedHosts: ['blush.cyberpunk.co.in', 'localhost']
  }
})
