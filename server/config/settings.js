/**
* Dependencies.
*/
var path = require('path');

// Defaults that you can access when you require this config.
module.exports = {
    rootPath: path.normalize(__dirname + '/../..'),
    port: parseInt(process.env.PORT, 10) || 3000,
    db_connection: process.env.DB_CONNECTION || 'mongodb://localhost/boost',
    host: process.env.HOST || '0.0.0.0'
};
