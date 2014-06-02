var model = require('model');

function person() {
	this.property('id', 'string', { required: true });
	this.property('name', 'string', { required: true });
	this.property('age', 'int', { required: false });

	this.validatesPresent('id');
	this.validatesWithFunction('id', function(val) {
		return val.substring(0,2) == 'id_';
	});
};

personModel = model.register('Person', person);

module.exports = personModel;