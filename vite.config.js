import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Fix for esbuild version mismatch issue
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    esbuildOptions: {
      // override to avoid using the broken binary
      define: {
        global: "globalThis"
      }
    }
  }
})
