import { createVitePlugins } from './build/vite/plugins'
import { resolve } from 'path'
import { ConfigEnv, loadEnv, UserConfig } from 'vite'
import { wrapperEnv } from './build/utils'

const pathResolve = (dir: string) => {
  return resolve(process.cwd(), '.', dir)
}

export default function ({ command, mode }: ConfigEnv): UserConfig {
  const isProduction = command === 'build'
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)
  const port = 5555

  return {
    root,
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
        },
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/'
        },
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/'
        }
      ]
    },
    server: {
      host: true,
      hmr: true,
      port,
      open: `http://localhost:${port}/`
    },
    plugins: createVitePlugins(viteEnv, isProduction),
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";@import '/@/styles/mixin.scss';`
        }
      }
    }
  }
}
