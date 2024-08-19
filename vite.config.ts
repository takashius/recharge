import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })],
  build: {
    rollupOptions: {
      output: {
        globals: {
          "@fortawesome/fontawesome-svg-core": "FontAwesome",
          "@fortawesome/free-solid-svg-icons": "FontAwesomeSolid",
          "@fortawesome/free-brands-svg-icons": "FontAwesomeBrands",
        },
      },
    },
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      mocks: path.resolve(__dirname, "./mocks"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});
