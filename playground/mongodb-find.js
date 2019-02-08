// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

var obj = new ObjectID();

console.log(obj);

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to the database server");
    }

    console.log("***Connected to MongoDB Server***");
    const db = client.db("TodoApp");

    // db.collection("Todos")
    //   .find({ _id: new ObjectID("5c54cf8ce585133e84567cd7") })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("Todos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("Unable to fetch todos", err);
    //     }
    //   );

    db.collection("Todos")
      .find({ age: 21 })
      .toArray()
      .then(
        docs => {
          console.log("Users");
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log("Unable to fetch todos", err);
        }
      );

    //client.close();
  }
);
