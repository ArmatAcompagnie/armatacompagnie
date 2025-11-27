import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Utilise DEPLOY_TARGET pour choisir la base en build : 'gh' ou 'cf' (ou undefined)
export default defineConfig(({ command }) => {
  const target = process.env.DEPLOY_TARGET
  const isDev = command === 'serve'

  return {
    plugins: [react()],
    base: isDev ? '/' : (target === 'gh' ? '/armatacompagnie/' : '/'),
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
  }
})
