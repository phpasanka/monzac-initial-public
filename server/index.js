const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5001;
const app = express();

var db = require("./database");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/article", require("./api/article"));
app.use("/", require("./api/home"));
app.use("/api/user", require("./api/user"));

app.listen(PORT, () => {
  console.log(`server listening on PORT ${PORT} ...!`);
});

module.exports = app;
