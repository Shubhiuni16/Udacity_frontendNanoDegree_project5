const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'development',
    devtool: 'source-map',
    stats: 'errors-only',
    devServer: {
        host: 'localhost',
        port: 8000,
        proxy: {
          context: () => true,
          target: 'http://localhost:8082',
          secure: false
        }
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx|mjs)$/, 
                loader: 'babel-loader',
                exclude: /node_modules/,

            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
           },
           { 
               test: /\.(png|svg|jpg|gif)$/,
               use: [
                   'file-loader'
               ]
           }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: './index.html'
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}