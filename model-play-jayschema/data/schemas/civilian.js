module.exports = {
	"id": "http://schema.ref.civilian",
	"allOf": [{ "$ref": "http://schema.ref.person" }],
	"title": "Civilian",
	"type": "object",
	"properties": {
		"nickname": { "type": "string" }
	},
	"required": ["nickname"]
};