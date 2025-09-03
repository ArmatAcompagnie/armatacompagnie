import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // En dev on sert à la racine '/', en build (et preview) on cible GitHub Pages
  base: command === 'serve' ? '/' : '/armatacompagnie/',
  server: {
    port: 3000,
    strictPort: true,
    open: true
  },
  preview: {
    port: 3000,
    strictPort: true,
    open: true
  }
}))
