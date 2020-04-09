const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5001;
var db = require('./database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/article',require('./api/article'));
app.use('/',require('./api/home'));


app.listen(PORT,()=>{
console.log(`server listening on PORT ${PORT} ...!`);
});


module.exports = app;