import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Output the built site to the repo root so Vercel can serve it cleanly
    // when using a monorepo layout.
    outDir: "../dist",
    emptyOutDir: true,
  },
})
