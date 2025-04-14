import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // Adjust the entry point as needed
  format: ["esm", "cjs"], // Output both ESM and CJS formats
  outDir: "dist", // Output directory
  splitting: false, // Disable code splitting
  sourcemap: true, // Generate source maps
  clean: true, // Clean the output directory before building
  dts: true, // Generate TypeScript declaration files
  esbuildOptions(options) {
    options.minify = false; // Disable minification to preserve comments
  },
});
