// Load the server
var settings = require('./settings'),
    server = require(settings.rootPath + '/server');

// Options to pass into the 'Good' plugin
var goodOptions = {
    subscribers: {
        console: ['ops', 'request', 'log', 'error']
    }
};

server.pack.register([
    {
        plugin: require("good"),
        options: goodOptions
    }
], function(err) {
    if (err) throw err;
});