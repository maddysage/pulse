const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    watch: true,
    module: {
        rules: [
            // for any JS file, run babel-loader
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            // for any css file, run through style-loader and css-loader
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
        loaders: [{
            // scan all js files
            test: /\.js$/,
            // exclude node modules
            exclude: /node_modules/,
            // query: {     presets: ['react', 'es2015', 'stage-1'] }
        }]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/index.html'
    })]
};
