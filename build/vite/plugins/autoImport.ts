/**
 * @name AutoImportDeps
 * @description automatic importing component when needed
 */

import AutoImport from 'unplugin-auto-import/vite'
import {
  VarletUIResolver,
  VantResolver
} from 'unplugin-vue-components/resolvers'

export const AutoImportDeps = () => {
  return AutoImport({
    dts: 'types/auto-imports.d.ts',
    imports: [
      'vue',
      'pinia',
      'vue-router',
      {
        '@vueuse/core': []
      }
    ],
    resolvers: [VarletUIResolver(), VantResolver()]
  })
}
