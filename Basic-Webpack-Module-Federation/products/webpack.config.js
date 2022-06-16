const HTMLWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports={
    mode: 'development',
    devServer: {
        port: 3002
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename:'remoteEntry.js',
            exposes: {
                './ProductsIndex' : './src/bootstrap'
            },
            shared: ['faker']
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
}