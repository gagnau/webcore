// TODO: Break this out in common - dev - prod - pattern later
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "../index.html"
});

module.exports = {
    mode: 'development',
    watch: true,
    context: path.resolve(__dirname, '../../sites/testsite'),
    entry: {
        main: './index.js',
    },
    output: {
        filename: 'testsite.min.js',
        path: path.resolve(__dirname, '../../dist/testsite/assets/'),
    },
    devServer: {
        contentBase: path.join(__dirname, '../../dist/testsite/'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: "less-loader"
                    },
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|ico|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },
                ],
            },            
        ],
    },
    plugins: [htmlPlugin],
};
