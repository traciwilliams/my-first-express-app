var express = require ('express');
var path = require ('path');
var app = express();
var port = 3000;



app.listen(process.env.PORT || port);//port needs to be in all caps
console.log("server has started");