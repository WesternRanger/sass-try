/**
 * Created by WesternRanger on 2017/7/11.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js',
        appcss: './src/index.scss'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
         rules: [
             {
                 test: /\.scss$/,
                 use: ExtractTextPlugin.extract({
                     fallback: "style-loader",
                     use: ['css-loader', 'sass-loader']
                 })
             }
         ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name][id][contenthash].css'
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ]
};