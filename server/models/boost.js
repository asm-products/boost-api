var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.Types.ObjectId,
	Boost;

Boost = mongoose.model('boosts', {
	label: { type: String },
	type: String,
	gif: { type: String, default: null },
	youtube: { type: String, default: null },
	image: { type: String, default: null },
	quote: { type: Object, default: null },
	date: Number,
	favourited: Array
});

var findAll = function(params, limit, offset, callback) {

	Boost.find(params).skip(offset).limit(limit).sort('-date').exec(params, function(err, boosts) {
		callback(err, boosts);
	});

};

var findById = function(id, callback) {

	Boost.findById(id, function(err, boost) {
		console.log('Finding');
		callback(err, boost);
	});

};

module.exports.findAll = findAll;
module.exports.findById = findById;