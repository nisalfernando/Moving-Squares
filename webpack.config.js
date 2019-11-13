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
                test: /* type of file */, use: /* th loader */
            }
        ]
    },
    mode: 'development'
};