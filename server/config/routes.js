/**
* Dependencies.
*/
var requireDirectory = require('require-directory');

// Bootstrap your controllers so you dont have to load them individually. This loads them all into the controller name space. https://github.com/troygoode/node-require-directory
var controller = requireDirectory(module, '../controllers');

module.exports = [
    {
        method: 'GET',
        path: '/boosts',
        config: controller.boost.index
    },
    {
        method: 'GET',
        path: '/boosts/{id}',
        config: controller.boost.view
    },
    {
        method: 'GET',
        path: '/boosts/{id}/favourite',
        config: controller.boost.favourite
    },
    {
        method: 'GET',
        path: '/{path*}',
        config: controller.base.missing
    }
];
