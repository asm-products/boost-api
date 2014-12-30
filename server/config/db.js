var mongoose = require('mongoose');

module.exports = function(db) {
	mongoose.connect(db);
}
