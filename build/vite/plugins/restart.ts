/**
 * @name ConfigRestartPlugin
 * @description watch file modification and auto restart
 */

import ViteRestart from 'vite-plugin-restart'

export const ConfigRestartPlugin = () => {
  return ViteRestart({
    restart: ['*.config.[jt]s', '**/config/*.[jt]s']
  })
}
