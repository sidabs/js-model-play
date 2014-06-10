var employeeModel = require('./employee');

function accountModel(name, age, gender, medicalRecord, department, manager, commission, territory) {

	employeeModel.call(this, name, age, gender, medicalRecord, department, manager);
	this.commission = commission;
	if(territory) { this.territory = territory; }
	
	var personSchema = require('../schemas/person');
	var employeeSchema = require('../schemas/employee');
	var supportingSchemaList = [personSchema, employeeSchema];
	
	var accountSchema = require('../schemas/account');
	this.validate = function(callback) {
		employeeModel.prototype.validate.call(this, accountSchema, supportingSchemaList, callback);
	};
};
accountModel.prototype = Object.create(employeeModel.prototype);

module.exports = accountModel;