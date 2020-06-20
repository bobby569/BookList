const path = require('path');

module.exports = {
    cache: true,
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        compress: true,
        noInfo: true,
        overlay: true,
    },
};
