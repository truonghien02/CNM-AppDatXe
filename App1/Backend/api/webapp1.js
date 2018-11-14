var express = require('express');
var bodyParser=require('body-parser');
var webappRepo = require('../repos/webappRepo');

var router = express.Router();

router.post('/', (req, res) => {	
console.log(JSON.stringify(req.body));
	webappRepo.add(req.body)
		.then(value => {
			console.log(value);
			res.statusCode = 201;
			res.json(req.body);
		})
		.catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.end('View error log on console');
		})
})

module.exports = router;