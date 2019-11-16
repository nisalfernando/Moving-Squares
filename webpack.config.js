const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'square.bundle.js'
    }
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/, 
    //             use: 
    //                 {
    //                 loader: 'babel-loader'
    //                 }
    //         }
    //     ]
    // }
};