const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "production",
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[chunkHash:8].js"
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
    }
}