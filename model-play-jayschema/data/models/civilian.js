var personModel = require('./person');

function civilianModel(name, age, gender, medicalRecord, nickname, address, billingHistory) {
	personModel.call(this, name, age, gender, medicalRecord);
	this.nickname = nickname;
	this.address = address;
	if(billingHistory) { this.billingHistory = billingHistory; }

	var personSchema = require('../schemas/person');
	var addressSchema = require('../schemas/address');
	var supportingSchemaList = [personSchema, addressSchema];
	
	var civilianSchema = require('../schemas/civilian');
	this.validate = function(callback) {
		personModel.prototype.validate.call(this, civilianSchema, supportingSchemaList, callback);
	};
};
civilianModel.prototype = Object.create(personModel.prototype);

module.exports = civilianModel;