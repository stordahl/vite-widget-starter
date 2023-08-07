import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "build",
    lib: {
      entry: "./dev/index.ts",
      name: "HNWidget",
      fileName: "HNWidgetDev",
      formats: ["es"],
    }, 
  },
  plugins: [svelte()],
})
