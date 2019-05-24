const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
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
    }
};