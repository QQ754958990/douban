const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '/src/view_model/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['src', 'node_modules']
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'

          }, {
            loader: 'sass-loader'

          }]
        })
      },
      {
        test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: path.resolve('src')
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {from: 'src/view_model/img', to: 'src/view_model/img'},
      {from: 'node_modules/react/umd/react.development.js', to: 'node_modules/react/umd/react.development.js'},
      {
        from: 'node_modules/react-dom/umd/react-dom.development.js',
        to: 'node_modules/react-dom/umd/react-dom.development.js'
      }
    ]),
    new HtmlWebpackPlugin({
      template: 'src/view_model/index.html',
      filename: 'index.html'
    })
  ]
}
