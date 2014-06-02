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

// departmentModel.prototype.validate = function validate(callback) {
// 	console.log('Department Model Validate()');

// 	var self = this;

// 	var jaySchema = require('jayschema');
// 	var js = new jaySchema();

// 	var personSchema = require('../schemas/person');
// 	var employeeSchema = require('../schemas/employee');
// 	// var employeeSchema = require('../schemas/engineer');
// 	// var employeeSchema = require('../schemas/account');
// 	var departmentSchema = require('../schemas/department');

// 	js.register(personSchema);
// 	js.register(employeeSchema);
// 	// js.register(engineerSchema);
// 	// js.register(accountSchema);
// 	js.register(departmentSchema);

// 	var missingSchemas = js.getMissingSchemas();
// 	if(missingSchemas.length) {
// 		callback({valid: false, detail: 'Missing Schemas: ' + missingSchemas});
// 	} else {
// 		js.validate(self, departmentSchema, function(errs) {
// 			callback({ valid: errs ? false : true, detail: errs ? errs : self })
// 		});
// 		// return js.validate(self, personSchema);
// 	}
// };

module.exports = departmentModel;