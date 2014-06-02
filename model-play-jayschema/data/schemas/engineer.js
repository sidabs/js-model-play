module.exports = {
	"id": "http://schema.ref.engineer",
	"allOf": [{ "$ref": "http://schema.ref.employee" }],
	"title": "Engineer",
	"type": "object",
	"properties": {
		"specialty": {
			"description": "what programming language the engineer specializes in",
			"type": "string"
		}
	},
	"required": ["specialty"]
};