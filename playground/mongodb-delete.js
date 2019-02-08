// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

var obj = new ObjectID();

console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to the database server");
  }

  console.log("***Connected to MongoDB Server***");
  const db = client.db("TodoApp");

  //deleteMany
  //   db.collection("Todos")
  //     .deleteMany({ text: "Eat Lunch" })
  //     .then(result => {
  //       console.log(result);
  //     });

  //   db.collection("Users")
  //     .deleteMany({ name: "Andrew" })
  //     .then(result => {
  //       console.log(result);
  //     });

  //deleteOne
  //   db.collection("Todos")
  //     .deleteOne({ text: "Eat lunch" })
  //     .then(result => {
  //       console.log(result);
  //     });

  //findOneAndDelete
  //   db.collection("Todos")
  //     .findOneAndDelete({ completed: false })
  //     .then(result => {
  //       console.log(result);
  //     });

  db.collection("Users")
    .findOneAndDelete({ _id: ObjectID("5c5db1837bcbe8f891c48003") })
    .then(result => {
      console.log(result);
    });

  //client.close();
});
