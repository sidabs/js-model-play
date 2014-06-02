var personModel = require('./person');

function employeeModel(name, age, department, manager) {
	personModel.call(this, name, age);
	this.department = department;
	if(manager) { this.manager = manager; }
	console.log('Employee Model Constructor: (%s, %s, %s, %s, %s)', 
		this.id, this.name, this.age, this.department, this.manager);

	//
	var personSchema = require('../schemas/person');
	var supportingSchemaList = [personSchema];
	
	var employeeSchema = require('../schemas/employee');
	this.validate = function(callback) {
		personModel.prototype.validate.call(this, employeeSchema, supportingSchemaList, callback);
	};
};
employeeModel.prototype = Object.create(personModel.prototype);

module.exports = employeeModel;