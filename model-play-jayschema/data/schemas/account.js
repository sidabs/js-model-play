module.exports = {
	"id": "http://schema.ref.account",
	"allOf": [{ "$ref": "http://schema.ref.employee" }],
	"title": "Account",
	"type": "object",
	"properties": {
		"commission": {
			"description": "the commission percentage the account rep recieves",
			"type": "number" 
		},
		"territory": {
			"description": "the territory that the account rep is responsible for",
			"type": "string"
		}
	},
	"required": ["commission"]
};