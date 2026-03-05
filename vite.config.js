import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // '/' for local dev, GitHub Pages subpath only in production builds
  base: command === 'serve' ? '/' : '/tryfecta-website/',
}))
