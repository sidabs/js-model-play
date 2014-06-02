function personModel(name, age) {
	this.id = 'idssss_' + new Date().getTime();
	this.name = name;
	if(age) { this.age = age; }
	console.log('Person Model Constructor: (%s, %s, %s)', 
		this.id, this.name, this.age);
};

personModel.prototype.validate = function validate(callback) {
	console.log('Person Model Validate()');

	var self = this;

	var jaySchema = require('jayschema');
	var js = new jaySchema();
	var personSchema = require('../schemas/person');

	js.register(personSchema);
	var missingSchemas = js.getMissingSchemas();
	if(missingSchemas.length) {
		callback({valid: false, detail: 'Missing Schemas: ' + missingSchemas});
	} else {
		js.validate(self, personSchema, function(errs) {
			callback({ valid: errs ? false : true, detail: errs ? errs : self })
		});
		// return js.validate(self, personSchema);
	}
};

module.exports = personModel;