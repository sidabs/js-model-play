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

module.exports = civilianModel;