var personModel = require('./person');

function civilianModel(name, age, nickname) {
	personModel.call(this, name, age);
	this.nickname = nickname;
	console.log('Civilian Model Constructor: (%s, %s, %s, %s)', 
		this.id, this.name, this.age, this.nickname);


	//
	var personSchema = require('../schemas/person');
	var supportingSchemaList = [personSchema];
	
	var civilianSchema = require('../schemas/civilian');
	this.validate = function(callback) {
		personModel.prototype.validate.call(this, civilianSchema, supportingSchemaList, callback);
	};
};
civilianModel.prototype = Object.create(personModel.prototype);

// civilianModel.prototype.validate = function validate(callback) {
// 	console.log('Civilian Model Validate()');

// 	var self = this;

// 	var jaySchema = require('jayschema');
// 	var js = new jaySchema();
// 	var personSchema = require('../schemas/person');
// 	var civilianSchema = require('../schemas/civilian');

// 	js.register(personSchema);
// 	js.register(civilianSchema);
// 	var missingSchemas = js.getMissingSchemas();
// 	if(missingSchemas.length) {
// 		callback({valid: false, detail: 'Missing Schemas: ' + missingSchemas});
// 	} else {
// 		js.validate(self, civilianSchema, function(errs) {
// 			callback({ valid: errs ? false : true, detail: errs ? errs : self })
// 		});
// 		// return js.validate(self, civilianSchema);
// 	}
// };

module.exports = civilianModel;