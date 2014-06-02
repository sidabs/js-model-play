var baseSchema = require('./base');

function extensionSchema() {
	baseSchema.call(this);
};
extensionSchema.prototype = Object.create(baseSchema.prototype);

extensionSchema.prototype.name = {
	"type": "String"
};

extensionSchema.prototype.schema = {
	title: "extension schema",
	type: "object",
	properties: {
		id: {
			description: "the unique identifier for this item",
			type: "string"
		},
		name: {
			descriptipon: "the name for the item",
			type: "string"
		},
		age: {
			description: "the age of the item",
			type: "integer"
		}
	}
}

// var js = new JaySchema();
// var instance = 64;
// var schema = { "type": "integer", "multipleOf": 8 };

// // synchronous…
// console.log('synchronous result:', js.validate(instance, schema));

// // …or async
// js.validate(instance, schema, function(errs) {
//     if (errs) { console.error(errs); }
//     else { console.log('async validation OK!'); }
// });