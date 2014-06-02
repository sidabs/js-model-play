module.exports = {
	"id": "http://schema.ref.account",
	"allOf": [{ "$ref": "http://schema.ref.employee" }],
	"title": "Account",
	"type": "object",
	"properties": {
		"commission": { "type": "number" },
		"territory": { "type": "string" }
	},
	"required": ["commission"]
};