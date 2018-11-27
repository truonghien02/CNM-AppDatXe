var express = require('express');
var moment = require('moment');
var clientRepo = require('../repos/clientRepos');

var router = express.Router();

router.get('/', (req, res) => {
	console.log("vao app2");
})


router.get('/load', (req, res) => {
	console.log("loading data at webapp2");
    clientRepo.loadAll()
   .then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.end('View error log on console');
		})
})

// router.get('/load/', (req, res) => {
// 	console.log("vao load");

//   	var ts = 0;
//     if (req.query.ts) {
//         ts = +req.query.ts;
//     }

//     var loop = 0;
//     var fn = () => {
// 		clientRepo.loadAll()
// 			.then(rows => {
// 				var return_ts = moment().unix();
// 				if (clientRepo.size() > 0) {
//             		res.json(rows);
// 		        } else {
// 		            loop++;
// 		            console.log(`loop: ${loop}`);
// 		            if (loop < 4) {
// 		                setTimeout(fn, 2500);
// 		            } else {
// 		                res.statusCode = 204;
// 		                res.end('no data');
// 		            }
// 		        }
				
// 			}).catch(err => {
// 				console.log(err);
// 				res.statusCode = 500;
// 				res.end('View error log on console');
// 			})
// 	}
// })

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