var mongoose = require('mongoose'),
    Boost = require('../models/boost'),
    Boom = require('boom');

mongoose.connect('mongodb://localhost/boost');

// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    index: {
        handler: function(request, reply){
    
            var limit = null, offset = 0, today = new Date(), timestamp;       

            if(request.query.limit) {
                limit = request.query.limit;
            }

            if(request.query.offset) {
                offset = request.query.offset;
            }

            today.setHours(0,0,0,0);
            timestamp = today.getTime()/1000;

            Boost.findAll({date: {"$lte": timestamp.toFixed(0)}}, limit, offset, function(err, boosts) {

                if(err) {
                    return reply(Boom.badImplementation(err));
                } else {
                    return reply(boosts);
                }

                
            });

        }
    },
    view: {
        handler: function(request, reply){
          
            Boost.findById(request.params.id, function(err, boost) {

                if(err) {
                    return reply(Boom.badImplementation(err));
                } else {
                    return reply(boost);
                }
                
            });

        }
    },
    favourite: {
        handler: function(request, reply){
            reply(true);
        }
    }
}
