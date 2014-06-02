module.exports = {
	"id": "http://schema.ref.employee",
	"allOf": [{ "$ref": "http://schema.ref.person" }],
	"title": "Employee",
	"type": "object",
	"properties": {
		"department": {
			"description": "the department the employee belongs to",
			"type": "string"
		},
		"manager": {
			"description": "is this person a manager (yes or no)",
			"type": "boolean",
		}
	},
	"required": ["department"]
};