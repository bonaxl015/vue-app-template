/**
 * @name ConfigMockPlugin
 * @description mockjs, local API interface
 */

import { viteMockServe } from 'vite-plugin-mock'
export const ConfigMockPlugin = (isBuild: boolean) => {
  return viteMockServe({
    ignore: /^\_/,
    mockPath: 'mock',
    localEnabled: !isBuild,
    prodEnabled: false,
    injectCode: `
       import { setupProdMockServer } from '../mock/_createProdMockServer';
       setupProdMockServer();
       `
  })
}
