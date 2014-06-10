var express = require('express');
var router = express.Router();

var JaySchema = require('jayschema');
var js = new JaySchema();


/* GET home page. */
router.get('/', function(req, res) {
	res.json({'model':'jay'});
});

router.get('/address', function(req, res) {
	var addressModel = require('../data/models/address');

	var myAddress = new addressModel('100 main street', 'my city', 'CA', '12345');
	myAddress.validate(function(result) {
		res.json(result);
	});
});

router.get('/person', function(req, res) {
	var personModel = require('../data/models/person');

	var medicalRecord = {
		"healthy": true,
		"lastCheckUp": "2014-01-01T00:00:00+04:00"		//date ex: 2014-01-01T00:00:00+04:00 / 2014-01-01T00:00:00-04:00 / 2014-01-01T00:00:00Z
	};

	var sid = new personModel('Sid', 30, 'M', medicalRecord);
	sid.validate(function(result) {		//callback is synchronous validation
		res.json(result);
	});
});

router.get('/civilian', function(req, res) {
	var civilianModel = require('../data/models/civilian');

	var address = {
		'street': '1 Main Street',
		'city': 'My City',
		'state': 'California',
		'zip': '12345'
	};

	var billingHistory = [{
		'street': '2 Main Street',
		'city': 'Your City',
		'state': 'Florida',
		'zip': '54321'
	}, {
		'street': '1 Main Street',
		'city': 'My City',
		'state': 'California',
		'zip': '12345'
	}];

	var medicalRecord = {
		"healthy": true,
		"lastCheckUp": "2014-01-01T00:00:00+04:00"		//date ex: 2014-01-01T00:00:00+04:00 / 2014-01-01T00:00:00-04:00 / 2014-01-01T00:00:00Z
	};

	var jon = new civilianModel('Jon', 25, 'M', medicalRecord, 'Johnny', address, billingHistory);
	jon.validate(function(result) {
		res.json(result);
	});
});

router.get('/employee', function(req, res) {
	var employeeModel = require('../data/models/employee');

	var sid = new employeeModel('Sidney', 30, 'F', null, 'Engineering', false);
	sid.validate(function(result) {
		res.json(result);
	});
});

router.get('/engineer', function(req, res) {
	var engineerModel = require('../data/models/engineer');

	var medicalRecord = {
		"healthy": true,
		"lastCheckUp": "2014-01-01T00:00:00+04:00"		//date ex: 2014-01-01T00:00:00+04:00 / 2014-01-01T00:00:00-04:00 / 2014-01-01T00:00:00Z
	};
	var sid = new engineerModel('Sid', 30, 'M', medicalRecord, 'Engineering', false, 'Java');
	sid.validate(function(result) {
		res.json(result);
	});
});

router.get('/account', function(req, res) {
	var accountModel = require('../data/models/account');

	var medicalRecord = {
		"healthy": true,
		"lastCheckUp": "2014-01-01T00:00:00+04:00"		//date ex: 2014-01-01T00:00:00+04:00 / 2014-01-01T00:00:00-04:00 / 2014-01-01T00:00:00Z
	};
	var sid = new accountModel('Sid', 30, 'M', medicalRecord, 'Account Rep', false, 10.5, "New York");
	sid.validate(function(result) {
		res.json(result);
	});
});

router.get('/department', function(req, res) {
	var medicalRecord = {
		"healthy": true,
		"lastCheckUp": "2014-01-01T00:00:00+04:00"		//date ex: 2014-01-01T00:00:00+04:00 / 2014-01-01T00:00:00-04:00 / 2014-01-01T00:00:00Z
	};
	
	var engineerModel = require('../data/models/engineer');
	var dabral = new engineerModel('Dabral', 30, 'M', medicalRecord, 'Engineering', false, 'Java');
	var maddern = new engineerModel('Maddern', 33, 'M', medicalRecord, 'Engineering', false, 'Objective-C');
	var engineerEmployeeList = [dabral, maddern];

	var accountModel = require('../data/models/account');
	var hackett = new accountModel('Hackett', 31, 'M', medicalRecord, 'Account Rep', false, 10.5, "East Coast");
	var dudas = new accountModel('Dudas', 36, 'M', medicalRecord, 'Account Rep', false, 15.0, "West Coast");
	var jaconi = new accountModel('Jaconi', 30, 'M', medicalRecord, 'Account Rep', false, 50.55, "Global");
	var accountEmployeeList = [hackett, dudas, jaconi];

	// // negaitve test
	// var civilianModel = require('../data/models/civilian');
	// var jon = new civilianModel('Jon', 25, 'Johnny');
	// engineerEmployeeList.push(jon);

	var departmentModel = require('../data/models/department');
	var engineering = new departmentModel('Engineering', engineerEmployeeList);
	engineering.validate(function(engineerResult) {
		var result = {};
		result.engineering = engineerResult;

		if(engineerResult.valid) {
			var account = new departmentModel('Account', accountEmployeeList);
			account.validate(function(accountResult) {
				result.account = accountResult;
				res.json(result);
			});
		} else {
			res.json(result);
		}
	});
});


module.exports = router;
