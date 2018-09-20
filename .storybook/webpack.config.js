var webpack = require('webpack')
const path = require('path')
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

module.exports = (baseConfig, env, defaultConfig) => {

  // defaultConfig.plugins.push(
  //   new webpack.DefinePlugin({
  //     'ASSETS_PATH': JSON.stringify('')
  //   }),
  //   new SpriteLoaderPlugin()
  // )    

  defaultConfig.module.rules.push(
    {
      test: /\.svg$/,
      use: [
        'svg-sprite-loader'
      ]
    }
  )

  defaultConfig.resolve = {
    alias: {
      components: path.resolve(__dirname, '../components/'),
    },
    extensions: ['*', '.js', '.jsx', '.json']
  }

  return defaultConfig
}