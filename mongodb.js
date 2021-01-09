const { MongoClient, ObjectID } = require("mongodb");

const connectURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect Mongodb ... ");
  }
  console.log("Mongodb connected successfully ... ");

  const db = client.db(databaseName);

  const updateTask = db.collection("tasks").updateOne(
    { _id: new ObjectID("5ff9bd84651f498932ce0734") },
    {
      $set: {
        completed: false,
      },
    }
  );

  updateTask
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
