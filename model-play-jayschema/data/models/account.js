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

module.exports = accountModel;