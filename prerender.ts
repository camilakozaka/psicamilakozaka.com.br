import { build } from 'vite'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const __dirname = new URL('.', import.meta.url).pathname

// Build client
await build({
  configFile: resolve(__dirname, 'vite.config.ts'),
})

// Build server entry
await build({
  configFile: resolve(__dirname, 'vite.config.ts'),
  build: {
    ssr: true,
    outDir: 'dist/server',
    rollupOptions: {
      input: resolve(__dirname, 'src/entry-server.tsx'),
      output: { format: 'esm' },
    },
  },
})

// Render to HTML
const { render } = await import(resolve(__dirname, 'dist/server/entry-server.js'))
const appHtml = render()

const template = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8')
const html = template.replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`)

writeFileSync(resolve(__dirname, 'dist/index.html'), html)

console.log('[prerender] index.html prerendered successfully')
