const { v4: uuidv4 } = require("uuid");
const express = require("express");
const db = require("../database");
const articleModel = require("../object_models/article");
const collection = "Article";
const router = express.Router();

//GET
//get all article
router.get("/", function (req, res) {
  //TODO
  db.selectOne("cde460a0-6ae6-11ea-b761-139a02d9c25c", "Article", function (
    err,
    result
  ) {
    if (err) return res.json(err);
    return res.json(result);
  });
});
//get thumbist
router.get("/thumbist", function (req, res) {
  //TODO
  db.selectMostRatedArticleThumbnails(function (err, result) {
    if (err) {
      console.log('error :' + err)
      return res.json(err);
    }
    return res.json(result);
  });
});
//get article by id
router.get("/id/:id", function (req, res) {
  //TODO
  db.selectByQuery({ docId: req.params.id }, 'Article', (err, result) => {
    if (!err) {
      return res.json(result)
    }
    else {
      return res.json(err)
    }
  })
});

//get article by category
router.get("/category/:category", function (req, res) {
  //TODO
  return res.json(req.params.category);
});

//get article by author
router.get("/author/:author", function (req, res) {
  //TODO
  return res.json(req.params.author);
});

//get article by rating
router.get("/rating/:rating", function (req, res) {
  //TODO
  return res.json(req.params.rating);
});

//POST
router.post("/create", function (req, res) {
  let body = req.body;
  let article = MakeReadyArticleToSave(body);
  // console.log(article);
  //TODO validate before insert
  db.insertOne(collection, article, (err, result) => {
    if (err) {
      //console.log(err);
      return res.send("error");
    }
    return res.send({ insert: "done" });
  });
});

function MakeReadyArticleToSave(obj) {
  // console.log(obj)
  articleModel.docId = uuidv4();
  articleModel.title = obj.title;
  articleModel.author = obj.author === '' ? "anonymous" : obj.author;
  articleModel.category = obj.category;
  articleModel.status = "active";
  articleModel.source = obj.content;
  articleModel.like = 0;
  articleModel.discussion = "Discussion";
  articleModel.createdDate = new Date();
  articleModel.preview = obj.content.substring(0, 200) + "...!";
  return articleModel;
}

router.post("/update", function (req, res) {
  let body = rse.body;
});

module.exports = router;
