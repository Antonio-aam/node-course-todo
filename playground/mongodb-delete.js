const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
	if (err) {
		return console.log("Unable to connect to MongoDB Server");
	}
	console.log("Connected to MongoDB Server");

	/*db.collection("Todos").deleteMany({text: "Something to do"}).then(result => {
		console.log(result);
	});*/

	/*db.collection("Todos").deleteOne({text: "Something to do"}).then(result => {
		console.log(result);
	});*/

	/*db.collection("Todos").findOneAndDelete({completed: false}).then(result => {
		console.log(result);
	});*/

	db.collection("Users").findOneAndDelete({_id: new ObjectID("asdasdasd")}).then(results => {
		console.log(JSON.stringify(results, undefined, 2));
	});

	//db.close();
});