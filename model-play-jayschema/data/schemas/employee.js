module.exports = {
	"id": "http://schema.ref.employee",
	"allOf": [{ "$ref": "http://schema.ref.person" }],
	"title": "Employee",
	"type": "object",
	"properties": {
		"department": { "type": "string" },
		"manager": { "type": "boolean" },
	},
	"required": ["department"]
};