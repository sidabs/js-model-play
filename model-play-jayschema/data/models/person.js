var baseModel = require('./base');

function personModel(name, age, gender, medicalRecord, constCallback) {
	baseModel.call(this);

	this.name = name;
	if(age) { this.age = age; }
	if(gender) { this.gender = gender; }
	if(medicalRecord) { this.medicalRecord = medicalRecord; }

	var supportingSchemaList = [];
	var personSchema = require('../schemas/person');
	this.validate = function(callback) {
		baseModel.prototype.validate.call(this, personSchema, supportingSchemaList, callback);
	};

	constCallback;
};
personModel.prototype = Object.create(baseModel.prototype);

module.exports = personModel;