var baseModel = require('./base');

function departmentModel(name, employeeList) {
	baseModel.call(this);

	this.name = name;
	if(employeeList) { this.employeeList = employeeList; }
	console.log('Department Model Constructor: (%s, %s, %s)', 
		this.id, this.name, this.employeeList);

	//
	var personSchema = require('../schemas/person');
	var employeeSchema = require('../schemas/employee');
	var supportingSchemaList = [personSchema, employeeSchema];
	
	var departmentSchema = require('../schemas/department');
	this.validate = function(callback) {
		baseModel.prototype.validate.call(this, departmentSchema, supportingSchemaList, callback);
	};
};

module.exports = departmentModel;