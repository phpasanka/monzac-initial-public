const { v4: uuidv4 } = require("uuid");
const express = require("express");
const db = require("../database");
const categoryModel = require("../object_models/category");

const routerHome = express.Router();

routerHome.get("/get/category", function (req, res) {
  db.selectByQuery({}, "Category", function (err, result) {
    if (err) return res.send("error");
    //console.log(result);
    return res.send(result);
  });
});

//POST
routerHome.post("/create/category", function (req, res) {
  let body = req.body;
  let category = MakeReadyCategotyToSave(body);
  //TODO validate before insert
  db.selectByQuery({ name: body.categoryName.trim() }, "Category", function (
    err,
    result
  ) {
    if (err) return res.send("error");
    if (Object.keys(result).length !== 0) return res.send("Already exist..");
    db.insertOne("Category", category);
    return res.send("OK");
  });
});

function MakeReadyCategotyToSave(obj) {
  console.log(obj.categoryName);
  categoryModel.catId = uuidv4();
  categoryModel.createdDate = new Date();
  categoryModel.subCategory = false;
  categoryModel.name = obj.categoryName.trim();
  return categoryModel;
}
module.exports = routerHome;
