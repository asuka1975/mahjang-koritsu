import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig((ctx) => {
  let base = "/"
  if (ctx.mode === "production") {
    base = "/mahjang-koritsu/"
  }

  return {
    plugins: [react()],
    base: base
  }
})
