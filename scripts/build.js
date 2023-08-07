import { build } from "vite";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const svelteOptions = {
  configFile: false,
  compilerOptions: {
    css: "external",
    
  },
  preprocess: vitePreprocess(),
};

await build({
  configFile: false,
  build: {
    lib: {
      entry: "./src/entry/index.ts",
      formats: ["es", "iife"],
      fileName: "hn-widget",
      name: "HNWidget",
    },
    emptyOutDir: false,
    outDir: "build",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return `hn-widget.css`;
          return assetInfo.name;
        },
      },
    }
  },
  plugins: [svelte(svelteOptions)],
});
