import {
  ConfigEnv, defineConfig, mergeConfig, UserConfig
} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueTypeImports from 'vite-plugin-vue-type-imports';

export const finalizeViteConfig = async (
  { mode }: ConfigEnv = { mode: 'development', command: 'serve' },
  config: Partial<UserConfig> = {}
): Promise<UserConfig> => (mergeConfig(config, {
  plugins: [
    vue(),
    vueTypeImports()
  ],
  css: {
    modules: {
      genereteScopedNames: mode === 'development' 
        ? undefined : '[hash:base64:5]'
    }
  }
}));

export default defineConfig(finalizeViteConfig);