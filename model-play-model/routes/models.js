var express = require('express');
var router = express.Router();

// var JaySchema = require('jayschema');
// var js = new JaySchema();

var defaultJSON = {'hello':'world'};

/* GET home page. */
router.get('/', function(req, res) {
	res.json({'model':'model'});
});


router.get('/test', function(req, res) {

// var model = require('model');
// var User = function () {
//   this.property('name', 'string', {required: false});
//   this.property('password', 'string', {required: false});

//   this.validatesLength('name', {is: 3});
//   this.validatesPresent('password', {on: 'create'});
//   this.validatesConfirmed('password', 'confirmPassword', {on: 'create'});
// };
// User = model.register('User', User);
// // Name validation will pass, but password will fail
// myUser = User.create({name: 'aaa'});


// res.json({user: myUser, valid: myUser.isValid()});


	var personModel = require('../data/models/person');
	var params = {
		// _id: 'id_' + new Date().getTime(),
		name: 'Siddhartha'
	};
	var sid = personModel.create(params);

	res.json({valid: sid.isValid(), errors: sid.isValid() ? null : sid.errors, person: sid});

	// res.json(defaultJSON);
});


module.exports = router;


// router.get('/person', function(req, res) {
// 	// var personModel = require('../data/models/person');

// 	// var sid = new personModel('Sid', 30);
// 	// sid.validate(function(result) {
// 	// 	res.json(result);
// 	// });
// 	// // var result = sid.validate();
// 	// // res.json(result);
// 	res.json(defaultJSON);
// });

// router.get('/civilian', function(req, res) {
// 	// var civilianModel = require('../data/models/civilian');

// 	// var jon = new civilianModel('Jon', 25, 'Johnny');
// 	// jon.validate(function(result) {
// 	// 	res.json(result);
// 	// });
// 	// // var result = sid.validate();
// 	// // res.json(result);
// 	res.json(defaultJSON);
// });

// router.get('/employee', function(req, res) {
// 	// var employeeModel = require('../data/models/employee');

// 	// var sid = new employeeModel('Sid', 30, 'Engineering', undefined);
// 	// sid.validate(function(result) {
// 	// 	res.json(result);
// 	// });
// 	// // var result = sid.validate();
// 	// // res.json(result);
// 	res.json(defaultJSON);
// });

// router.get('/engineer', function(req, res) {
// 	// var engineerModel = require('../data/models/engineer');

// 	// var sid = new engineerModel('Sid', 30, 'Engineering', undefined, 'Java');
// 	// sid.validate(function(result) {
// 	// 	res.json(result);
// 	// });
// 	// // var result = sid.validate();
// 	// // res.json(result);
// 	res.json(defaultJSON);
// });

// router.get('/account', function(req, res) {
// 	// var accountModel = require('../data/models/account');

// 	// var sid = new accountModel('Sid', 30, 'Account Rep', undefined, 10.5, "New York");
// 	// sid.validate(function(result) {
// 	// 	res.json(result);
// 	// });
// 	// // var result = sid.validate();
// 	// // res.json(result);
// 	res.json(defaultJSON);
// });

// router.get('/department', function(req, res) {
// 	// // var employeeModel = require('../data/models/employee');
// 	// // var sid = new employeeModel('Sid', 30, 'Technology', false);
// 	// // var tanner = new employeeModel('Tanner', 31, 'Account', true);

// 	// var engineerModel = require('../data/models/engineer');
// 	// var dabral = new engineerModel('Dabral', 30, 'Engineering', true, 'Java');
// 	// var maddern = new engineerModel('Maddern', 33, 'Engineering', true, 'Objective-C');
// 	// var engineerEmployeeList = [dabral, maddern];

// 	// var accountModel = require('../data/models/account');
// 	// var hackett = new accountModel('Hackett', 31, 'Account Rep', false, 10.5, "East Coast");
// 	// var dudas = new accountModel('Dudas', 36, 'Account Rep', false, 15.0, "West Coast");
// 	// var jaconi = new accountModel('Jaconi', 30, 'Account Rep', false, 50.55, "Global");
// 	// var accountEmployeeList = [hackett, dudas, jaconi];

// 	// // var civilianModel = require('../data/models/civilian');
// 	// // var jon = new civilianModel('Jon', 25, 'Johnny');
// 	// // engineerEmployeeList.push(jon);


// 	// var departmentModel = require('../data/models/department');
// 	// var engineering = new departmentModel('Engineering', engineerEmployeeList);
// 	// engineering.validate(function(engineerResult) {
// 	// 	// res.json(engineeringResult);
// 	// 	var result = {};
// 	// 	result.engineering = engineerResult;

// 	// 	if(engineerResult.valid) {
// 	// 		var account = new departmentModel('Account', accountEmployeeList);
// 	// 		account.validate(function(accountResult) {
// 	// 			result.account = accountResult;
// 	// 			res.json(result);
// 	// 		});
// 	// 	} else {
// 	// 		res.json(result);
// 	// 	}
// 	// });

// 	// // var result = engineering.validate();
// 	// // res.json(result);
// 	res.json(defaultJSON);
// });
