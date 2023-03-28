/**
 * @name SvgIconsPlugin
 * @description load svg files
 */

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export const ConfigSvgIconsPlugin = (isBuild: boolean) => {
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    symbolId: 'icon-[dir]-[name]',
    svgoOptions: isBuild
  })
}
