var express = require('express');
var clientRepo = require('../repos/clientRepos');

var router = express.Router();


router.get('/', (req, res) => {
	console.log("vao app2");
})

router.get('/load/', (req, res) => {
	console.log("vao load");
	clientRepo.loadAll()
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.end('View error log on console');
		})
})

router.post('/reservegeocode/', (req, res) => {
	console.log("vao resergeocode");
	console.log(req.body);
	clientRepo.insertGeocode(req.body)
		.then(rows => {
			console.log('row')
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.end('View error log on console');
		})
})

module.exports = router;