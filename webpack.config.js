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
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),
        // do not emit compiled assets that include errors
        new webpack.NoErrorsPlugin()
    ],
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    }
};
