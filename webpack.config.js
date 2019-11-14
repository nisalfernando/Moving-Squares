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
                test: /\.js$/, use: { loader: 'babel-loader'}
            }
        ]
    },
    mode: 'development'
};