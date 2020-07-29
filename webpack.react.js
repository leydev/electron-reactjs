const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { spawn } = require("child_process")

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/react.js',
    output: {
        path: __dirname + '/build/renderer',
        filename: 'bundle.js'
    },
    target: "electron-renderer",
    devServer: {
        contentBase: './build/renderer',
        port: 8001,
        after: () => {
            let chrome = spawn("./node_modules/electron/dist/electron", ["build/electron.js"], {
                cwd: process.env["PWD"]
            })
            chrome.stdout.on("data", (chunk) => {
                console.log("\x1b[34m", "Electron says:")
                console.log(chunk.toString())
            })
            chrome.stderr.on("data", chunk => {
                console.log("\x1b[34m", "Electron says:")
                console.error(chunk.toString())
            })
            chrome.on("close", () => { process.exit(0) })
        },
        open: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', /* 'eslint-loader' */]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html'),
        }),
    ],
    resolve: {
        enforceModuleExtension: false,
        extensions: [' ', '.jsx', '.js']
    }
};
