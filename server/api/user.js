// to handle user access
const crypto = require("../crypto");
const bcrypt = require("bcrypt");
const express = require("express");
const db = require("../database");
const jwt = require('jsonwebtoken');
const config = require('../settings');
const saltRounds = 10;
const routerUser = express.Router();

//POST
routerUser.post("/login", (req, res) => {
  let body = req.body;
  let email = body.email;
  db.selectByQuery({ email: email }, "Users", (err, result) => {
    if (err) return res.status(400).send("error");
    if (Object.keys(result).length === 0)
      return res.status(400).send("Not found...!");
    crypto.Decrypt(result[0].password, function (err, decryptedPass) {
      if (err) return res.status(500).send();
      if (bcrypt.compareSync(body.password, decryptedPass)) {
        const payload = { email };
        const token = jwt.sign(payload, config.secret, {
          expiresIn: '1h'
        });
        return res.cookie('token', token, { httpOnly: true }).sendStatus(200);
      } else {
        return res.status(401).send("not allowed");
      }
    });
  });
});

routerUser.post("/insert", function (req, res) {
  //TODO: email validate (length)
  let body = req.body;
  db.selectByQuery({ email: body.email }, "Users", function (err, result) {
    if (err) return res.status(400).send("error");
    if (Object.keys(result).length !== 0)
      return res.status(400).send("user already exist..");
    bcrypt.hash(body.password, saltRounds, function (err1, hash) {
      if (err1) return res.status(500).send();
      crypto.Encrypt(hash, function (err, encPass) {
        if (err) return res.status(500).send();
        let objUser = {
          email: body.email,
          password: encPass,
        };
        db.insertOne("Users", objUser, (err, result) => {
          if (err) {
            return res.status(500).send("Error");
          }
          return res.status(200).send("OK");
        });
      });
    });
  });
});

module.exports = routerUser;
