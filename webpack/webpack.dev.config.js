/** ----------------------------------------
    Webpack
 ---------------------------------------- */

const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

/** ----------------------------------------
    Plugins
 ---------------------------------------- */

const InjectExportableClass = require('./plugins/InjectExportableClass');
const TerminalReload = require('./plugins/TerminalReload');

/** ----------------------------------------
    Configuration
 ---------------------------------------- */

module.exports = merge(common, {
    mode: 'development',
    optimization: {
        minimize: false
    },
    output: {
        filename: 'juggle.js'
    },
    plugins: [
        new InjectExportableClass(),
        new TerminalReload('TestScript', 'node dev')
    ]
});