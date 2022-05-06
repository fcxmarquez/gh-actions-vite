import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://fcxmarquez.github.io/gh-actions-vite/",
  plugins: [react()]
})
