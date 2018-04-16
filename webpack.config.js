const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '/src/view_model/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // 将 JS 字符串生成为 style 节点
        }, {
          loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
        }, {
          loader: 'sass-loader' // 将 Sass 编译成 CSS
        }]
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
    new HtmlWebpackPlugin({
      template: 'src/view_model/index.html',
      filename: 'index.html'
    })
  ]
}
