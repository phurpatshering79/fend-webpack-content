const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    module: {
        rules: [
                {
            test: '/\.js$/',       //RegExp to locate the files that our loader runs on
            exclude: /node_modules/,    //File that beeds to be excluded, loader does not run here
            loader: "babel-loader"  //the loader that we are using OR plugins || for our webpack
                }
                ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets:false,
            protectWebpackAssets: false
        }),
        new BundleAnalyzerPlugin({
            generateStatsFile: true
        })
    ]
}
