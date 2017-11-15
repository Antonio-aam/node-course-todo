//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

//let obj = new ObjectID();
//console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
	if (err) {
		return console.log("Unable to connect to MongoDB Server");
	}
	console.log("Connected to MongoDB Server");
	
	/*db.collection("Todos").insertOne({
		text: "Something to do",
		completed: false
	}, (err, result) => {
		if (err) {
			return console.log("Unable to insert Todo", err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	});*/

	db.collection("Users").insertOne({
		name: "Paco",
		age: 27,
		location: "Madriz"
	}, (err, result) => {
		if (err) {
			return console.log("Unable to insert Todo", err);
		}

		//console.log(JSON.stringify(result.ops, undefined, 2));
		console.log(result.ops[0]._id)
	});

	db.close();
});

//.\mongod.exe --dbpath C:\Users\tonik\Documents\mongo-data