{
	"title": "Person",
	"type": "object",
	"properties": {
		"id": {
			"description": "the unique identifier for this item",
			"type": "string"
		},
		"name": {
			"descriptipon": "the name for the item",
			"type": "string"
		},
		"age": {
			"description": "the age of the item",
			"type": "integer"
		}
	},
	"required": ["id", "name"]
}