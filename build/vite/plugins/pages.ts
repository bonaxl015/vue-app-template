/**
 * @name ConfigPagesPlugin
 * @description dynamically create routes
 */

import Pages from 'vite-plugin-pages'
export const ConfigPagesPlugin = () => {
  return Pages({
    pagesDir: [{ dir: 'src/pages', baseRoute: '' }],
    extensions: ['vue', 'md'],
    exclude: ['**/components/*.vue'],
    nuxtStyle: true
  })
}
