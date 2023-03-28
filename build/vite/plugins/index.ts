/**
 * @name createVitePlugins
 * @description combine plugins
 */

import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { ConfigSvgIconsPlugin } from './svgIcons'
import { AutoRegistryComponents } from './component'
import { AutoImportDeps } from './autoImport'
import { ConfigMockPlugin } from './mock'
import { ConfigCompressPlugin } from './compress'
import { ConfigPagesPlugin } from './pages'
import { ConfigRestartPlugin } from './restart'
import { ConfigProgressPlugin } from './progress'
import { ConfigEruda } from './eruda'
import { ConfigImageminPlugin } from './imagemin'
import { ConfigVisualizerConfig } from './visualizer'

export function createVitePlugins(env: ViteEnv, isBuild: boolean) {
  const { VITE_USE_MOCK, VITE_USE_ERUDA } = env

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    vueJsx(),
    vueSetupExtend()
  ]

  // automatically import components when needed
  vitePlugins.push(AutoRegistryComponents())

  // automatically import dependencies when needed
  vitePlugins.push(AutoImportDeps())

  // automatically create routes
  vitePlugins.push(ConfigPagesPlugin())

  // enable .gz compression  rollup-plugin-gzip
  vitePlugins.push(ConfigCompressPlugin())

  // listen for changes and restart
  vitePlugins.push(ConfigRestartPlugin())

  // show progress during build
  vitePlugins.push(ConfigProgressPlugin())

  // eruda
  VITE_USE_ERUDA && vitePlugins.push(ConfigEruda())

  // rollup-plugin-visualizer
  vitePlugins.push(ConfigVisualizerConfig())

  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(ConfigMockPlugin(isBuild))

  // vite-plugin-svg-icons
  vitePlugins.push(ConfigSvgIconsPlugin(isBuild))

  if (isBuild) {
    // vite-plugin-imagemin
    vitePlugins.push(ConfigImageminPlugin())
  }

  return vitePlugins
}
