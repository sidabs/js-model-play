var model = require('model');

// function person() {
// 	this.property('_id', 'string', { required: true });
// 	this.property('name', 'string', { required: true });
// 	this.property('age', 'int', { required: false });

// 	this.validatesPresent('_id');
// 	this.validatesWithFunction('_id', function(val) {
// 		return val.substring(0,2) == 'id_';
// 	});
// 	this.validatesLength('name', {is: 3, message: 'Try again, gotta be 3!'});

// 	this.beforeValidate = function(params) {
// 		console.log('BEFORE VALIDATE: ', params);
// 	};
// 	this.afterValidate = function(params) {
// 		console.log('AFTER VALIDATE: ', params);
// 	};
// };

// person = model.register('Person', person);

var person = function() {
	this.property('name', 'string');
	// this.validatesLength('name', {is: 3, message: 'Try again, gotta be 3!'});
	this.validatesWithFunction('name', function(value, model) {
		console.log('value, model: %s, %s', value, JSON.stringify(model));
		if(value == 'Sid') {
			return true;
		} else {
			return "You are not Sid... Piss off.";
		}
	});
}
person = model.register('person', person);

module.exports = person;