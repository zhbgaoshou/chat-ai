import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

/** node:url 是node.js的内置模块 */
import { fileURLToPath, URL } from "node:url";

/**vant按需引入 */
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
