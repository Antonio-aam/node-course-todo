let mongoose = require("mongoose");

let Todo = mongoose.model("Todo", {
	text: {
		type: String,
		required: true,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {
    Todo
};
/*let newTodo = new Todo({
	text: "Cook dinner",
	completed: false,
	completedAt: 11111990
});

newTodo.save().then(doc => {
	console.log(JSON.stringify(doc, undefined, 2));
}, e => {
	console.log("Unable to connect");
});*/