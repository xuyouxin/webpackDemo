const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: "all"
    //     }
    // }
};