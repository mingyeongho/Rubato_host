import { defineConfig, loadEnv } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      tailwindcss(),
      TanStackRouterVite(),
      react(),
      federation({
        name: "host",
        remotes: {
          remote: {
            type: "module",
            name: "remote",
            entry: env.REMOTE_REVIEWS_URL,
            entryGlobalName: "remote",
            shareScope: "default",
          },
        },
        filename: "remoteEntry.js",
        shared: ["react", "react-dom"],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
