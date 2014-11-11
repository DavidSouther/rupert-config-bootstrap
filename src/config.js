var Path = require('path');

module.exports = function (config){

    config.vendors = config.vendors || {};
    config.vendors.prefix = config.vendors.prefix || [];
    config.vendors.prefix.unshift(Path.resolve(__dirname, '../node_modules'));

    config.vendors.js = (config.vendors.js || []).concat([
        'jquery/dist/jquery.js',
        'bootstrap/dist/js/bootstrap.js'
    ]);

    config.vendors.css = (config.vendors.css || []).concat([
        'bootstrap/dist/css/bootstrap.css',
        'bootstrap/dist/css/bootstrap-theme.css',
    ]);

    return config;
};
