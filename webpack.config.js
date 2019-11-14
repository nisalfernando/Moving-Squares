const path = require('path');

module.export = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, use: 'babel-loader'
            }
        ]
    },
    mode: 'development'
};