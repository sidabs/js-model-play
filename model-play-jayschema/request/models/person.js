function personRequestModel(postData) {

	for(propertyName in postData) {
		this[propertyName] = postData[propertyName];
	};

	console.log(this);
};

personRequestModel.prototype.validate = function validate(callback) {
	console.log('Person Model Validate()');

	var self = this;

	var jaySchema = require('jayschema');
	var js = new jaySchema();
	var personRequestSchema = require('../schemas/person');

	js.register(personRequestSchema);
	var missingSchemas = js.getMissingSchemas();
	if(missingSchemas.length) {
		callback({valid: false, detail: 'Missing Schemas: ' + missingSchemas});
	} else {
		js.validate(self, personRequestSchema, function(errs) {
			callback({ valid: errs ? false : true, detail: errs ? errs : self })
		});
		// return js.validate(self, personRequestSchema);
	}
};

module.exports = personRequestModel;