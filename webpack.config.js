const path = require('path')
//自动生成 html的webpack 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 抽离 css文件的 webpack插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[chunkHash:8].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: 'public/index.html'
        }),
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
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                loader: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader'], 
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 512, // 当图片小于此时(byte) 转为 base64 
                            name: 'images/[name].[ext]', // 设置打包后图片的路径 
                            publicPath: '/'  // 设置公共路径 为 服务器根目录
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        // 配置端口号为 3000
        port: 3000,
        // 构建成功后自动打开 localhost:3000
        open: true
    }
}