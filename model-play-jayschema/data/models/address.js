function addressModel(street, city, state, zip) {
	this.street = street;
	this.city = city;
	this.state = state;
	this.zip = zip;
	console.log('Address Model Constructor: (%s, %s, %s, %s)', 
		this.street, this.city, this.state, this.zip);
};

addressModel.prototype.validate = function validate(callback) {
	var supportingSchemaList = [];
	var schema = require('../schemas/address');

	console.log('Base Model Validate()');

	var self = this;

	var jaySchema = require('jayschema');
	var js = new jaySchema();

	js.register(schema);
	supportingSchemaList.forEach(function(schemaValue, schemaIndex) {
		js.register(schemaValue);
	});
	var missingSchemas = js.getMissingSchemas();
	if(missingSchemas.length) {
		callback({valid: false, detail: 'Missing Schemas: ' + missingSchemas});
	} else {
		js.validate(self, schema, function(errs) {	//callback is synchronous validation
			callback({ valid: errs ? false : true, detail: errs ? errs : self });
		});
		// return js.validate(self, schema);		//return is synchronous validation
	}
};

module.exports = addressModel;