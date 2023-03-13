const path = require('path')

const judgeComponent = (file) => {
  const ignore = ['vant', '@nutui', '@varlet']
  return ignore.some((item) =>
    path.join(file).includes(path.join('node_modules', item))
  )
}

module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8'
      ]
    },
    'cnjm-postcss-px-to-viewport': {
      unitToConvert: 'px', // unit to convert
      viewportWidth: 750, // Width of UI design draft
      unitPrecision: 6, // The precision after conversion, that is, the number of decimal places
      propList: ['*'], // specify the unit of the converted css property, * means that all units of the css property are converted
      viewportUnit: 'vw', // specify the window unit that needs to be converted to, the default is vw
      fontViewportUnit: 'vw', // Specify the window unit that the font needs to be converted to, the default is vw
      minPixelValue: 1, // The default value is 1, if it is less than or equal to 1px, no conversion will be performed
      mediaQuery: true, // Whether to also convert in the css code of the media query, the default is false
      replace: true, // Whether to directly replace the attribute value after conversion
      landscape: false, //Whether to add the media query condition generated according to landscapeWidth @media (orientation: landscape)
      landscapeUnit: 'rem', //The unit used in landscape mode
      landscapeWidth: 1134, //The viewport width used in landscape mode
      include: [],
      exclude: [], // Set to ignore files, use regular expressions to match directory names
      customFun: ({ file }) => {
        // This custom method is for the 375 problem of dealing with the design draft under the vant component
        const designWidth = judgeComponent(file) ? 375 : 750
        return designWidth
      }
    }
  }
}
