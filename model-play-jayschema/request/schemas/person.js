module.exports = {
	"id": "http://request.ref.person",
	"title": "Person",
	"type": "object",
	"properties": {
		"name": {
			"descriptipon": "the name for the item",
			"type": "string"
		},
		"age": {
			"description": "the age of the item",
			"type": "integer"
		}
	},
	"required": ["name"]
}