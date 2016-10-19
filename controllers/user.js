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





module.exports = ctrl;