const path = require('path');

module.export = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'square.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, use: 'babel-loader'
            }
        ]
    }
};