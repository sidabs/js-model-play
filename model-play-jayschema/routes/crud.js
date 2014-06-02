var express = require('express');
var router = express.Router();

var JaySchema = require('jayschema');
var js = new JaySchema();

/* GET home page. */
router.get('/', function(req, res) {
	res.json({'request':'jay'});
});

router.post('/person', function(req, res) {
	var personRequestModel = require('../request/models/person');

	var sid = new personRequestModel(req.body);
	// var sid = new personRequestModel({
	// 	"name":		"Peter Parker",
	// 	"age":		50
	// });

	sid.validate(function(result) {
		res.json(result);
	});
	// res.json({'request':'person'});
});

module.exports = router;
