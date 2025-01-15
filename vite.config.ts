import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  let base = "/"
  if (mode === "production") {
    base = "/mahjang-koritsu/"
  }

  return {
    plugins: [react()],
    base: base
  }
})
