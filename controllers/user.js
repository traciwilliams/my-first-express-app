var express = require('express');
var ctrl = express.Router();


var users = [
	{
		username: 'Testy McTestingSon',
		password: 'l33tp4zzw0rdz'

	},	
		{
		username: 'Bilbo Baggon',
		password: 'l33tp4zzw0rdz'

	},	
		{
		username: 'Testy McTestingSon',
		password: 'l33tp4zzw0rdz'
	}	
]


ctrl.get('/', function(req, res, next){ //request //response //callback
	res.json(users);
});

ctrl.get('/1', function(req, res, next){
	res.json(users[0]);
});

ctrl.get('/2', function(req, res, next){
	res.json(users[1]);
});

ctrl.get('/3', function(req, res, next){
	res.json(users[2]);
});





module.exports = ctrl;