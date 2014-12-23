// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    index: {
        handler: function(request, reply){
          // Render the view with the custom greeting
            reply([]);
        },
        app: {
            name: 'boost_list'
        }
    },
    view: {
        handler: function(request, reply){
          // Render the view with the custom greeting
            reply({});
        },
        app: {
            name: 'boost_view'
        }
    }
}
