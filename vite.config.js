import { defineConfig, transformWithOxc, loadEnv } from "vite";
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

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const processEnvValues = Object.keys(env).reduce((prev, key) => {
    prev[`process.env.${key}`] = JSON.stringify(env[key]);
    return prev;
  }, {});

  return {
    plugins: [
      react(),
      allowJsxInJs(), // Plugs directly into the Vite/Oxc pipeline
    ],
    base: "/samachar/",
    define: processEnvValues,
    // Add this legacy flag to handle strict CommonJS imports smoothly
    legacy: {
      inconsistentCjsInterop: true,
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
  };
});
