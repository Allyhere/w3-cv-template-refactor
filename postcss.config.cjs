const cssnano = require('cssnano')
const OpenProps = require('open-props')
const postcssPresetEnv  = require('postcss-preset-env')
const postcssJitProps = require('postcss-jit-props')

module.exports = {
  plugins: [
    postcssJitProps(OpenProps),
    postcssPresetEnv({
      stage: 0,
      autoprefixer: true,
			enableClientSidePolyfills: false,
      features: {
        'logical-properties-and-values': false, 
        'prefers-color-scheme-query': false, 
        'gap-properties': false,
        'custom-properties': false,
        'dir-pseudo-class': false,
        'focus-within-pseudo-class': false,
        'focus-visible-pseudo-class': false,
        'color-functional-notation': false,
      }
    }),
    cssnano({ preset: 'default' })
  ]
}