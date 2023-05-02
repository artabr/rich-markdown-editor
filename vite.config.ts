import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const fileName = {
  es: `index.mjs`,
  cjs: `index.cjs`,
  iife: `index.iife.js`,
};

const formats = Object.keys(fileName) as Array<keyof typeof fileName>;

module.exports = defineConfig({
  base: "./",
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "richMarkdownEditor",
      formats,
      fileName: format => fileName[format],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
  plugins: [dts()],
});
