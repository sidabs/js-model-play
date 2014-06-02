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

module.exports = personModel;