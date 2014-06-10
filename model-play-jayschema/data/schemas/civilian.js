module.exports = {
	"id": "http://schema.ref.civilian",
	"allOf": [{ "$ref": "http://schema.ref.person" }],
	"title": "Civilian",
	"type": "object",
	"properties": {
		"nickname": {
			"description": "this is the nickname of the civilian",
			"type": "string"
		},
		"address": {
			"type": "object",
			"allOf": [{ "$ref": "http://schema.ref.address" }]
		},
		"billingHistory": {
			"type": "array",
			"items": {
				"type": "object",
				"allOf": [{ "$ref": "http://schema.ref.address" }]
			}
		}
	},
	"required": ["nickname", "address"]
};