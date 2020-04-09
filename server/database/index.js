//var {Pool} = require('mongodb');
var mongoClient = require("mongodb").MongoClient;
var objectId = require("mongodb").ObjectId;
const URL = "mongodb://localhost:27017";
const SSL = process.env.NODE_ENV === "production";
const dbName = "OpenMonzacMongo";
const options = {
  keepAlive: 1,
  useUnifiedTopology: true,
  useNewUrlParser: true
};
class Database {
  insertOne(collection, obj) {
    //TODO: validate json obj
    mongoClient.connect(URL, options, function(err, db) {
      if (err) throw err;
      var dbo = db.db(dbName);
      obj._id = new objectId();
      dbo.collection(collection).insertOne(obj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
  }

  insertMany(collection, obj) {
    //TODO: validate json obj
    mongoClient.connect(URL, options, function(err, db) {
      if (err) throw err;
      var dbo = db.db(dbName);
      dbo.collection(collection).insertMany(obj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
      });
    });
  }
  updateByQuery() {}
  deleteByQuery() {}
  selectOne(id, collection, callback) {
    mongoClient.connect(URL, options, function(err, db) {
      if (err) callback(err, null);
      var dbo = db.db(dbName);
      dbo
        .collection(collection)
        .find({ docId: id })
        .toArray(function(err, result) {
          if (err) callback(err, null);
          db.close();
          return callback(null, result);
        });
    });
  }
  selectByQuery(query, collection, callback) {
    // console.log(query);
    mongoClient.connect(URL, options, function(err, db) {
      if (err) callback(err, null);
      var dbo = db.db(dbName);
      dbo
        .collection(collection)
        .find(query)
        .toArray(function(err, result) {
          if (err) callback(err, null);
          db.close();
          return callback(null, result);
        });
    });
  }
  selectMany() {}
  end() {}
}

//mongoClient.connect(connectionString, function(err,db){
//    if(err)
//    throw err;
//    console.log("DB has been created");
//    db.close();
//});

module.exports = new Database();
