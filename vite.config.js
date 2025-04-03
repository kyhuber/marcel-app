import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'  // Add this import

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    esbuildOptions: {
      // override to avoid using the broken binary
      define: {
        global: "globalThis"
      }
    }
  },
  // Add this resolve section
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})