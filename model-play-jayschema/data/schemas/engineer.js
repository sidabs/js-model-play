module.exports = {
	"id": "http://schema.ref.engineer",
	"allOf": [{ "$ref": "http://schema.ref.employee" }],
	"title": "Engineer",
	"type": "object",
	"properties": {
		"specialty": { "type": "string" }
	},
	"required": ["specialty"]
};