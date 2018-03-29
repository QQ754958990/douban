var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname+"/src/view_model/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
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
                use: [ 'style-loader', 'css-loader' ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: path.resolve('src')
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/view_model/index.html',
            filename: 'index.html'
        })
    ]
};
