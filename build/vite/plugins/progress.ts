/**
 * @name ConfigProgressPlugin
 * @description display progress bar
 */

import { Plugin } from 'vite'
import progress from 'vite-plugin-progress'

export const ConfigProgressPlugin = () => {
  return progress() as Plugin
}
