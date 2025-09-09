/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  resolve: {
    alias: {
      tailgrids: path.resolve(__dirname, 'node_modules/tailgrids/src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    verbose: true,
    reporters: ['verbose'],
  },
})
