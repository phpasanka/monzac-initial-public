const settings = require("../settings");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectId;
const url = settings.mongoUrl;
const client = new MongoClient(
  url,
  { useNewUrlParser: true },
  { useUnifiedTopology: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 }
);
const SSL = process.env.NODE_ENV === "production";
const dbName = settings.dbProduction;
const options = {
  keepAlive: 1,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  forceServerObjectId: true,
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
          db.close();
          return callback(null, res);
        });
    });
  }


  selectMostRatedArticleThumbnails(callback) {
    MongoClient.connect(url, options, (err, db) => {
      if (err) {
        return callback(err, null);
      }
      let query = ''
      let collection = 'Article'

      db.db(dbName)
        .collection(collection)
        .find({}).project({ _id: 1, docId: 1, title: 1, category: 1, preview: 1, author: 1 }).sort(['_id', -1])
        .toArray((err, res) => {
          if (err) {
            return callback(err, null);
          }
          db.close();
          //console.log(res)
          return callback(null, res);
        });
    });
  }
}


module.exports = new Database();
