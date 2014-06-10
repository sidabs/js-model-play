module.exports = {
	"id": "http://schema.ref.person",
	"title": "Person",
	"type": "object",
	"additionalProperties": false,
	"properties": {
		"id": {
			"description": "the unique identifier for this item",
			"type": "string",
			"format": "identifier"
		},
		"name": {
			"descriptipon": "the name for the item",
			"type": "string"
		},
		"age": {
			"description": "the age of the item",
			"type": "integer"
		},
		"gender": {
			"description": "the gender",
			"type": "string",
			"enum": ["M","F"]
		},
		"medicalRecord": {
			"description": "this is the medical record for a person",
			"type": "object",
			"properties": {
				"healthy": {
					"description": "boolean flag indicating whether the person if healthy overall",
					"type": "boolean"					
				},
				"lastCheckUp": {
					"description": "this is the date of the persons last medical checkup",
					"type": "string",
					"format": "date-time"
				},
				"reuired": ["healthy", "lastCheckUp"]
			}
		}
	},
	"required": ["id", "name"]
}