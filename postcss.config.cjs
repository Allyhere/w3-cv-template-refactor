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
    }),
    cssnano({ preset: 'default' })
  ]
}