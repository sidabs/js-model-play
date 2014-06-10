module.exports = {
	"id": "http://schema.ref.address",
	"title": "Address",
	"type": "object",
	"properties": {
		"street": {
			"description": "this is the street address",
			"type": "string"
		},
		"city": {
			"description": "this is the city",
			"type": "string"
		},
		"state": {
			"description": "this is the state",
			"type:": "string"
		},
		"zip": {
			"description": "this is the zip code",
			"type": "string"
		}
	},
	"required": ["street", "city", "state", "zip"]
};