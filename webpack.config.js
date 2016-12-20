var path = require('path');
var config = {
    entry: 'src/main.js',

    output: {
        path:'./',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
            }
        ]
    }
}

module.exports = config;