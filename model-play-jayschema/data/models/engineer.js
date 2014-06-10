var employeeModel = require('./employee');

function engineerModel(name, age, gender, medicalRecord, department, manager, specialty) {
	employeeModel.call(this, name, age, gender, medicalRecord, department, manager);
	this.specialty = specialty;
	
	var personSchema = require('../schemas/person');
	var employeeSchema = require('../schemas/employee');
	var supportingSchemaList = [personSchema, employeeSchema];
	
	var engineerSchema = require('../schemas/engineer');
	this.validate = function(callback) {
		employeeModel.prototype.validate.call(this, engineerSchema, supportingSchemaList, callback);
	};
};
engineerModel.prototype = Object.create(employeeModel.prototype);

module.exports = engineerModel;