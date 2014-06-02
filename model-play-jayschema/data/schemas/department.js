module.exports = {
	"id": "http://schema.ref.department",
	"title": "Department",
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
		"employeeList": {
			"description": "this is the list of employees that belong to the department",
			"type": "array",
			"items": {
				"oneOf": [
					{ "$ref": "http://schema.ref.employee" }
				]
			}
		}
	},
	"required": ["id", "name"]
}