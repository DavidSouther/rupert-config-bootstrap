var Path = require('path');

module.exports = function (config){

    config.append('stassets.vendors.prefix', [
        Path.resolve(__dirname, '../node_modules')
    ]);

    config.prepend('stassets.vendors.js', [
        'jquery/dist/jquery.js'
    ])

    config.append('stassets.vendors.js', [
        'bootstrap/dist/js/bootstrap.js'
    ])

    config.append('stassets.vendors.css', [
        'bootstrap/dist/css/bootstrap.css',
        'bootstrap/dist/css/bootstrap-theme.css',
    ]);

    return config;
};
