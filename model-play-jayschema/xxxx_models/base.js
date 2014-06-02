var JaySchema = require('jayschema');

function baseSchema() {
	//
};

baseSchema.prototype.getName = function() {
	return "base";
}

baseSchema.prototype.schema = {
	id: {
		description: "the unique identifier for this item",
		type: "string"
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




// {
// 	id:		'abcde12345',
// 	name:	'sid',
// 	age:	31
// }