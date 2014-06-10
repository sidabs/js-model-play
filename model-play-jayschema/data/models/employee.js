var personModel = require('./person');

function employeeModel(name, age, gender, medicalRecord, department, manager) {
	personModel.call(this, name, age, gender, medicalRecord);
	this.department = department;
	if(manager) { this.manager = manager; }

	var personSchema = require('../schemas/person');
	var supportingSchemaList = [personSchema];
	
	var employeeSchema = require('../schemas/employee');
	this.validate = function(callback) {
		personModel.prototype.validate.call(this, employeeSchema, supportingSchemaList, callback);
	};
};
employeeModel.prototype = Object.create(personModel.prototype);

module.exports = employeeModel;