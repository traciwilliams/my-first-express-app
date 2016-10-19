var express = require('express');
var ctrl = express.Router();

//data for our routes

var data = [
	{
		name: 'North Coast Music Fest',
		location: 'Union Park',
		notes: 'Wu Tang Clan'
	},
	{
		name: 'Spring Awakening',
		location: 'Solider Field',
		notes: 'minors asking for booze'
	},
	{
		name: 'Marshmello',
		location: 'Concord',
		notes: 'black friday'
	}	

];

//build our first real api 
ctrl.get('/', function(req, res, next){
	res.json(data);
});

ctrl.get('/1', function(req, res, next){
	res.json(data[0]);
});

ctrl.get('/2', function(req, res, next){
	res.json(data[1]);
});

ctrl.get('/3', function(req, res, next){
	res.json(data[2]);
});





module.exports = ctrl;