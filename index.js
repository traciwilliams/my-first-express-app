var express = require ('express');
var path = require ('path');
var app = express();
var port = 3000;

//set public, views and handlebars
app.use(express.static(__dirname + '/public'));//TWO underscores//builds directory
app.set('views', path.join(__dirname, '/views'));//TWO underscores//joining all the files in the directory
app.set('view engine', 'hbs');


//require our controllers
var homeCtrl = require('./controllers/home');
var playgroundCtrl = require('./controllers/playground');
var userCtrl = require('./controllers/user');

//then we map '/' routes to controllers
app.use('/',homeCtrl);
app.use('/play', playgroundCtrl);
app.use('/user', userCtrl);



app.listen(process.env.PORT || port);//port needs to be in all caps
console.log("server has started");



