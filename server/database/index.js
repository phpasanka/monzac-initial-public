const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectId;
const url =
  "mongodb+srv://admin:2uqRqFfzZW6iiODh@monzacstore-1khfz.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(
  url,
  { useNewUrlParser: true },
  { useUnifiedTopology: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 }
);
const SSL = process.env.NODE_ENV === "production";
const dbName = "MonzacStore";
const options = {
  keepAlive: 1,
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
class Database {
  insertOne(collection, obj, callback) {
    //TODO: validate json obj
    MongoClient.connect(url, options, function (err, db) {
      if (err) {
        db.close();
        return callback(err, null);
      }
      db.db(dbName)
        .collection(collection)
        .insertOne(obj, function (err, res) {
          if (err) {
            db.close();
            return callback(err, null);
          }
          return callback(null, res);
        });
    });
  }

  selectByQuery(query, collection, callback) {
    MongoClient.connect(url, options, (err, db) => {
      if (err) {
        return callback(err, null);
      }
      db.db(dbName)
        .collection(collection)
        .find(query)
        .toArray((err, res) => {
          if (err) {
            return callback(err, null);
          }
          client.close();
          return callback(null, res);
        });
    });

    // client.connect((err) => {
    //   if (err) {
    //     return callback(err, null);
    //   }
    //   const dbo = client.db(dbName);
    //   dbo
    //     .collection(collection)
    //     .find(query)
    //     .toArray(function (err, result) {
    //       if (err) {
    //         return callback(err, null);
    //       }
    //       client.close();
    //       return callback(null, result);
    //     });
    // });
  }
}

module.exports = new Database();
