var express = require('express');
var router = express.Router();

var JaySchema = require('jayschema');
var js = new JaySchema();


/* GET home page. */
router.get('/', function(req, res) {
	res.json({'model':'jay'});
});

router.get('/test', function(req, res) {
	var JaySchema = require('jayschema');
	var js = new JaySchema();
	var instance = 65;
	var schema = { 'type': 'integer', 'sdasdasd': 8 };

	//synch
	console.log('synchronous result: ', js.validate(instance, schema));

	//a-synch
	js.validate(instance, schema, function(errs) {
		if(errs) {
			console.log('asych errors: ', errs);
		} else {
			console.log('asynch validation ok');
		}
	});

	res.json({
		hello: 'world'
	});
});


router.get('/person/schema', function(req, res) {
	var personSchema = require('../models/personschema');
	res.json(personSchema);
});

router.get('/person', function(req, res) {
	var personClass = require('../models/person');
	var person = new personClass();

	js.register(person.schema);

	var missingSchemas = js.getMissingSchemas();
	if(missingSchemas.length) {
		res.json({error: 'Missing Schemas', detail: missingSchemas});
	}

	var sid = new person.model('sid', 30);

	js.validate(sid, person.schema, function(errs) {
		if(errs) {
			res.json({error: 'Errors Found', detail: errs});
		} else {
			res.json({error: 'Success', detail: sid});
		}
	})
});

router.get('/employee', function(req, res) {
	var personClass = require('../models/person');
	var employeeClass = require('../models/employee');
	var employee = new employeeClass();

	js.register(personClass.prototype.schema);
	js.register(employee.schema);
	
	var missingSchemas = js.getMissingSchemas();
	if(missingSchemas.length) {
		res.json({error: 'Missing Schemas', detail: missingSchemas});
	}

	var sid = new employee.model('sid', 'what the hellsss', 'Engineering', null);

	js.validate(sid, employee.schema, function(errs) {
		if(errs) {
			res.json({error: 'Errors Found', detail: errs});
		} else {
			res.json({error: 'Success', detail: sid});
		}
	})
})

module.exports = router;
