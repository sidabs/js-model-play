
function personClass() {
	//
};

// personClass.prototype.schema = require('./personschema');
personClass.prototype.schema = {
	"id": "http://schema.ref.person",
	"title": "Person",
	"type": "object",
	"properties": {
		"id": {
			"description": "the unique identifier for this item",
			"type": "string"
		},
		"name": {
			"descriptipon": "the name for the item",
			"type": "string"
		},
		"age": {
			"description": "the age of the item",
			"type": "integer"
		}
	},
	"required": ["id", "name"]
}

personClass.prototype.model = function(name, age) {
	console.log('person CLASS MODEL CONSTRUCTOR (%s, %s)', name, age);
	this.id = 'id_' + new Date().getTime();
	this.name = name;
	this.age = age;
};

module.exports = personClass;