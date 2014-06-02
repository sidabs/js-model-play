function baseModel() {
	this.id = 'id_sd_' + new Date().getTime();
	// this.id = 'sd@sd.com';
	console.log('Base Model Constructor: (%s)', this.id);
};

baseModel.prototype.validate = function validate(schema, supportingSchemaList, callback) {
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

module.exports = baseModel;