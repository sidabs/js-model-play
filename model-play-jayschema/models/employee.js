var personClass = require('./person');

function employeeClass() {
	personClass.call(this);
};
employeeClass.prototype = Object.create(personClass.prototype);

// employeeClass.prototype.schema = personClass.prototype.schema;
// employeeClass.prototype.schema.properties.department = { type: "string" };
// employeeClass.prototype.schema.properties.manager = { type: "boolean" };
// employeeClass.prototype.schema.required.push('department');

employeeClass.prototype.schema = {
	"id": "http://schema.ref.employee",
	"allOf": [{ "$ref": "http://schema.ref.person" }],
	"title": "Employee",
	"type": "object",
	"properties": {
		"department": { "type": "string" },
		"manager": { "type": "boolean" },
	},
	"required": ["department", "manager"]
};

employeeClass.prototype.model = function(name, age, department, manager) {
	console.log('EMPLPOYEE CLASS MODEL CONSTRUCTOR (%s, %s, %s, %s)', name, age, department, manager);
	personClass.prototype.model.call(this, name, age);
	this.department = department;
	if(manager != null) { this.manager = manager; }
};

module.exports = employeeClass;