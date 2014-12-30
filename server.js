/**
* Dependencies.
*/
var Hapi = require('hapi'),
    config = require('./server/config/settings'),
    db = require('./server/config/db')(config.db_connection);

// Create a server with a host, port, and options
var server = Hapi.createServer(config.host, config.port);

// Export the server to be required elsewhere.
module.exports = server;

// Bootstrap Hapi Server Plugins
require('./server/config/plugins');

// Add the server routes
server.route(require('./server/config/routes'));

//Start the server
server.start(function() {
    //Log to the console the host and port info
    console.log('Server started at: ' + server.info.uri);
});
