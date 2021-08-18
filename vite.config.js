import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? '/vue_page_transition/' : '/',
  plugins: [vue()],
  build: {
    outDir: "dist",
  }
})
