var personModel = require('./person');

function employeeModel(name, age, department, manager) {
	personModel.call(this, name, age);
	this.department = department;
	if(manager) { this.manager = manager; }
	console.log('Employee Model Constructor: (%s, %s, %s, %s, %s)', 
		this.id, this.name, this.age, this.department, this.manager);
};
employeeModel.prototype = Object.create(personModel.prototype);

employeeModel.prototype.validate = function validate(callback) {
	console.log('Employee Model Validate()');

	var self = this;

	var jaySchema = require('jayschema');
	var js = new jaySchema();
	var personSchema = require('../schemas/person');
	var employeeSchema = require('../schemas/employee');

	js.register(personSchema);
	js.register(employeeSchema);
	var missingSchemas = js.getMissingSchemas();
	if(missingSchemas.length) {
		callback({valid: false, detail: 'Missing Schemas: ' + missingSchemas});
	} else {
		js.validate(self, employeeSchema, function(errs) {
			callback({ valid: errs ? false : true, detail: errs ? errs : self })
		});
		// return js.validate(self, personSchema);
	}
};

module.exports = employeeModel;