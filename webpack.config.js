var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                // shorthand for `<name>-loader`
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    // shorthand for `babel-preset-<name>`
                    presets: ['react', 'react-hmre', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
};
