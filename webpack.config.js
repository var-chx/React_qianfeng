const path = require('path')
//自动生成 html的webpack 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 抽离 css文件的 webpack插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: "production",
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[chunkHash:8].js"
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: 'css/[name].[chunkHash:8].css',
          chunkFilename: '[id].css',
          ignoreOrder: false, // Enable to remove warnings about conflicting order
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
        ],
    }
}