module.exports = {
    stats: 'errors-only',
    entry: './src/electron.js',
    output: {
        path: __dirname + '/build',
        filename: 'electron.js',
        libraryTarget: 'commonjs2'
    },
    target: "electron-main",
    node: {
        __dirname: false,
        __filename: false,
        fs: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
};
