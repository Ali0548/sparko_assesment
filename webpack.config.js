const webpack = require('webpack')
module.exports = {
    node: {
        process: true,
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser'
        })
    ]
};