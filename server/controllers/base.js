var Boom = require('boom');

module.exports = {
    missing: {
        handler: function(request, reply){
            reply(Boom.notFound());
        }
    }
}
