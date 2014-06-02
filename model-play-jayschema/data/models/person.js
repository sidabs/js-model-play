var baseModel = require('./base');

function personModel(name, age) {
	baseModel.call(this);
	
	this.name = name;
	if(age) { this.age = age; }
	console.log('Person Model Constructor: (%s, %s, %s)', 
		this.id, this.name, this.age);

	//
	var supportingSchemaList = [];
	
	var personSchema = require('../schemas/person');
	this.validate = function(callback) {
		baseModel.prototype.validate.call(this, personSchema, supportingSchemaList, callback);
	};
};
personModel.prototype = Object.create(baseModel.prototype);

// personModel.prototype.validate = function validate(callback) {
// 	console.log('Person Model Validate()');

// 	// var schema = require('../schemas/person');
// 	// var supportingSchemaList = new Array();
	
// 	baseModel.prototype.validate.call(this, schema, supportingSchemaList, callback);

// 	// var self = this;

// 	// var jaySchema = require('jayschema');
// 	// var js = new jaySchema();
// 	// var personSchema = require('../schemas/person');

// 	// js.register(personSchema);
// 	// var missingSchemas = js.getMissingSchemas();
// 	// if(missingSchemas.length) {
// 	// 	callback({valid: false, detail: 'Missing Schemas: ' + missingSchemas});
// 	// } else {
// 	// 	js.validate(self, personSchema, function(errs) {
// 	// 		callback({ valid: errs ? false : true, detail: errs ? errs : self })
// 	// 	});
// 	// 	// return js.validate(self, personSchema);
// 	// }
// };

module.exports = personModel;