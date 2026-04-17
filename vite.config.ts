import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  resolve: { alias: { '#': '/src' } },
  plugins: [tailwindcss(), viteReact()],
  ssgOptions: {
    script: 'defer',
    formatting: 'minify',
  },
})
