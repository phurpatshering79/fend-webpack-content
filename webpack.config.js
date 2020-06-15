const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
                {
            test: '/\.js$/',       //RegExp to locate the files that our loader runs on
            exclude: /node_modules/,    //File that beeds to be excluded, loader does not run here
            loader: "babel-loader"  //the loader that we are using OR plugins || for our webpack
                }
        ]
}
}
