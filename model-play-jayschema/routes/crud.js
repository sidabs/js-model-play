var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.json({'request':'jay'});
});

router.post('/person/create', function(req, res) {
	var personRequestModel = require('../request/models/person');

	var sidRequest = new personRequestModel(req.body);

	sidRequest.validate(function(requestValidation) {
		var personModel = require('../data/models/person');
		var sid = new personModel(sidRequest.name, sidRequest.age);
		sid.validate(function(modelValidation) {
			res.json({
				request: requestValidation,
				model: modelValidation
			});
		});
	});
});

module.exports = router;
