// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to the database server");
  }

  console.log("***Connected to MongoDB Server***");
  const db = client.db("TodoApp");

  // db.collection("Todos").insertOne(
  //   {
  //     text: "Something to do",
  //     completed: false
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log("Couldn't add collection", err);
  //     }

  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // );

  //Insert new doc into Users {name, age, location}

  // db.collection("Users").insertOne(
  //   {
  //     name: "Issiac Torrero",
  //     age: 21,
  //     location: "Boise, Idaho"
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log("Couldn't add collection", err);
  //     }

  //     console.log(result.ops[0]._id.getTimestamp());
  //   }
  // );

  client.close();
});
