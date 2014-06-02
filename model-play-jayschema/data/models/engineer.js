var employeeModel = require('./employee');

function engineerModel(name, age, department, manager, specialty) {
	employeeModel.call(this, name, age, department, manager);
	this.specialty = specialty;
	console.log('Engineer Model Constructor: (%s, %s, %s, %s, %s, %s)', 
		this.id, this.name, this.age, this.department, this.manager, this.specialty);


	//
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