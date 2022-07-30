/** ----------------------------------------
    Modules
 ---------------------------------------- */

const fs = require('fs');
const path = require('path');

/** ----------------------------------------
     Webpack
 ---------------------------------------- */

const webpack = require('webpack');

/** ----------------------------------------
    Settings
 ---------------------------------------- */

const BASE_DIR = __dirname + '/./../';

/** ----------------------------------------
    Banner
 ---------------------------------------- */

const banner = require('./../src/setup/_banner');

/** ----------------------------------------
    Configuration
 ---------------------------------------- */

module.exports = {
    devServer: {
        contentBase: path.join(BASE_DIR),
        port: 3000,
        watchContentBase: true
    },
    entry: BASE_DIR + 'src/Juggle.js',
    output: {
        path: path.resolve(BASE_DIR + 'dist'),
        umdNamedDefine: true,
        libraryExport: 'default',
        libraryTarget: 'var',
        library: 'Juggle'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            '@build': path.resolve(BASE_DIR, 'dist/'),
            '@js': path.resolve(BASE_DIR, 'src/'),
            '@method': path.resolve(BASE_DIR, 'src/methods/'),
            '@helper': path.resolve(BASE_DIR, 'src/helpers/'),
            '@mock': path.resolve(BASE_DIR, 'mockup/'),
            '@state': path.resolve(BASE_DIR, 'src/state/'),
            '@util': path.resolve(BASE_DIR, 'src/util/')
        },
        extensions: ['*', '.js']
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: banner(process.env)
        })
    ]
};
