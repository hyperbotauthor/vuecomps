const webpack = require('webpack')
const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const TerserPlugin = require("terser-webpack-plugin")

const outputFile = 'index'
const globalName = 'Vuecomps'

const config = require('./package.json')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [      
      {
        test: /.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.vue\.(s?[ac]ss)$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,        
        loader: 'vue-loader',    
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile + '.umd.min.js',
    library: globalName,
    libraryTarget: 'umd',
  },
  externals: {    
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'VERSION': JSON.stringify(config.version),
    }),
    new VueLoaderPlugin(),
  ],
}
