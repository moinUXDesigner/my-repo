import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// 👉 Replace with your actual GitHub repo name
const repoName = 'my-repo'

export default defineConfig({
  plugins: [
    // Required plugins
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // ✅ IMPORTANT for GitHub Pages deployment
  base: `/${repoName}/`,

  // File types to support raw imports
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    outDir: 'dist', // default for Vite (used in deploy.yml)
  },
})