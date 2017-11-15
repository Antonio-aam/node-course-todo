const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
	if (err) {
		return console.log("Unable to connect to MongoDB Server");
	}
	console.log("Connected to MongoDB Server");

	/*db.collection("Todos").find().toArray().then((docs) => {
		console.log("Todos");
		console.log(JSON.stringify(docs, undefined, 2));
	}, err => {
		console.log("Unable to fetch todos", err)
	});

	db.collection("Todos").find().count().toArray().then((count) => {
		console.log(`Todos count: ${count}`);
	}, err => {
		console.log("Unable to fetch todos", err)
	});*/

	db.collection("Todos by name").find({name: "Andrew"}).toArray().then((docs) => {
		console.log("Todos");
		console.log(JSON.stringify(docs, undefined, 2));
	}, err => {
		console.log("Unable to fetch todos", err)
	});

	//db.close();
});