import { defineConfig, transformWithOxc } from "vite";
import react from "@vitejs/plugin-react";

// Custom plugin to force Oxc to parse JSX inside .js files
const allowJsxInJs = () => ({
  name: "allow-jsx-in-js",
  enforce: "pre",
  async transform(code, id) {
    // Only target .js files inside your src directory
    if (!id.match(/src\/.*\.js$/)) {
      return null;
    }
    // Force Oxc to parse this file as a 'jsx' language type
    return await transformWithOxc(code, id, {
      lang: "jsx",
    });
  },
});

export default defineConfig({
  plugins: [
    react(),
    allowJsxInJs(), // Plugs directly into the Vite/Oxc pipeline
  ],
  base: '/samachar/',
  // Add this legacy flag to handle strict CommonJS imports smoothly
  legacy: {
    inconsistentCjsInterop: true,
  },
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    rolldownOptions: {
      moduleTypes: {
        ".js": "jsx", // Ensures dependency-optimization handles third-party JS containing JSX
      },
    },
  },
});
