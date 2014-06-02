var employeeModel = require('./employee');

function engineerModel(name, age, department, manager, specialty) {
	employeeModel.call(this, name, age, department, manager);
	this.specialty = specialty;
	console.log('Engineer Model Constructor: (%s, %s, %s, %s, %s, %s)', 
		this.id, this.name, this.age, this.department, this.manager, this.specialty);
};
engineerModel.prototype = Object.create(employeeModel.prototype);

engineerModel.prototype.validate = function validate(callback) {
	console.log('Employee Model Validate()');

	var self = this;

	var jaySchema = require('jayschema');
	var js = new jaySchema();
	var personSchema = require('../schemas/person');
	var employeeSchema = require('../schemas/employee');
	var engineerSchema = require('../schemas/engineer');

	js.register(personSchema);
	js.register(employeeSchema);
	js.register(engineerSchema);
	var missingSchemas = js.getMissingSchemas();
	if(missingSchemas.length) {
		callback({valid: false, detail: 'Missing Schemas: ' + missingSchemas});
	} else {
		js.validate(self, engineerSchema, function(errs) {
			callback({ valid: errs ? false : true, detail: errs ? errs : self })
		});
		// return js.validate(self, personSchema);
	}
};

module.exports = engineerModel;