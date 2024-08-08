import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  plugins: [
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
  ],
  resolve: {
    alias: {
      "src": path.resolve(__dirname, "./src"),
      "mocks": path.resolve(__dirname, "./mocks"),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
})
