const HTMLWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    devServer: {
        port: 3001
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products : 'products@http://localhost:3002/remoteEntry.js',
                cart: 'cart@http://localhost:3003/remoteEntry.js'
            }
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
}