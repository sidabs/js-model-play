module.exports = {
	"id": "http://schema.ref.civilian",
	"allOf": [{ "$ref": "http://schema.ref.person" }],
	"title": "Civilian",
	"type": "object",
	"properties": {
		"nickname": {
			"description": "this is the nickname of the civilian",
			"type": "string"
		}
	},
	"required": ["nickname"]
};