var express = require('express');
var router = express.Router();

var JaySchema = require('jayschema');
var js = new JaySchema();

/* GET home page. */
router.get('/', function(req, res) {
	res.json({'request':'jay'});
});

router.post('/person/create', function(req, res) {
	var personRequestModel = require('../request/models/person');

	var sidRequest = new personRequestModel(req.body);
	// var sid = new personRequestModel({
	// 	"name":		"Peter Parker",
	// 	"age":		50
	// });

	sidRequest.validate(function(requestValidation) {
		// res.json(result);

		var personModel = require('../data/models/person');
		var sid = new personModel(sidRequest.name, sidRequest.age);
		sid.validate(function(modelValidation) {
			res.json({
				request: requestValidation,
				model: modelValidation
			});
		});
	});
	// res.json({'request':'person'});
});

module.exports = router;
