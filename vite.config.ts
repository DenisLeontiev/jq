import {
  ConfigEnv, defineConfig, mergeConfig, UserConfig,
} from "vite";
import svgLoader from "vite-svg-loader";
import vue from "@vitejs/plugin-vue";
import vueTypeImports from "vite-plugin-vue-type-imports";

export const finalizeViteConfig = async (
  { mode }: ConfigEnv = { mode: "development", command: "serve" },
  config: Partial<UserConfig> = {},
): Promise<UserConfig> => (mergeConfig(config, {
  plugins: [
    vue(),
    svgLoader({
      svgoConfig: {
        plugins: [
          "removeDimensions",
          {
            name: "removedFills",
            type: "perItem",
            fn(item) {
              if (item.type === "element" && item.name === "svg") {
                // eslint-disable-next-line no-param-reassign
                delete item.attributes.fill;
              }

              if (item.type === "element" && item.name === "path") {
                if (item.attributes.fill === "#A1A1A5") {
                  // eslint-disable-next-line no-param-reassign
                  delete item.attributes.fill;
                }
              }
            },
          },
        ],
      },
    }),
    vueTypeImports(),
  ],
  css: {
    modules: {
      genereteScopedNames: mode === "development"
        ? undefined : "[hash:base64:5]",
    },
  },
}));

export default defineConfig(finalizeViteConfig);
