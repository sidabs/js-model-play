module.exports = {
	"id": "http://request.ref.engineer",
	"title": "Engineer Request",
	"type": "object",
	"properties": {
		"name": {
			"descriptipon": "the name for the item",
			"type": "string"
		},
		"age": {
			"description": "the age of the item",
			"type": "integer"
		},
		"specialty": {
			"description": "what programming language the engineer specializes in",
			"type": "string"
		}
	},
	"required": ["specialty"]
};