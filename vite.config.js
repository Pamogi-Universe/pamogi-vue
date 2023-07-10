import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"
import {quasar, transformAssetUrls} from "@quasar/vite-plugin"
import Components from "unplugin-vue-components/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {transformAssetUrls}
    }),
    quasar({
      autoImportComponentCase: 'combined',
      sassVariables: 'src/assets/scss/quasar/_variables.scss'
    }),
    Components({
      dirs:["src/components/Base"]
    })
  ],
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: `
              @import "./src/assets/scss/main";
         `
        },
    },
  },
  resolve:{
    alias:{
      '@': resolve(__dirname,'src')
    }
  }
})
