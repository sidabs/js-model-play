var employeeModel = require('./employee');

function accountModel(name, age, department, manager, commission, territory) {

	employeeModel.call(this, name, age, department, manager);
	this.commission = commission;
	if(territory) { this.territory = territory; }
	console.log('Acount Model Constructor: (%s, %s, %s, %s, %s, %s, %s)', 
		this.id, this.name, this.age, this.department, this.manager, this.commission, this.territory);


	//
	var personSchema = require('../schemas/person');
	var employeeSchema = require('../schemas/employee');
	var supportingSchemaList = [personSchema, employeeSchema];
	
	var accountSchema = require('../schemas/account');
	this.validate = function(callback) {
		employeeModel.prototype.validate.call(this, accountSchema, supportingSchemaList, callback);
	};
};
accountModel.prototype = Object.create(employeeModel.prototype);

// accountModel.prototype.validate = function validate(callback) {
// 	console.log('Account Model Validate()');

// 	var self = this;

// 	var jaySchema = require('jayschema');
// 	var js = new jaySchema();
// 	var personSchema = require('../schemas/person');
// 	var employeeSchema = require('../schemas/employee');
// 	var accountSchema = require('../schemas/account');

// 	js.register(personSchema);
// 	js.register(employeeSchema);
// 	js.register(accountSchema);
// 	var missingSchemas = js.getMissingSchemas();
// 	if(missingSchemas.length) {
// 		callback({valid: false, detail: 'Missing Schemas: ' + missingSchemas});
// 	} else {
// 		js.validate(self, accountSchema, function(errs) {
// 			callback({ valid: errs ? false : true, detail: errs ? errs : self })
// 		});
// 		// return js.validate(self, personSchema);
// 	}
// };

module.exports = accountModel;