var express = require('express');
var router = express.Router();

var orders = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {orders});
});
router.get('/main', function(req, res, next) {
  res.render('main', {});
});

 router.get('/form', function(req, res, next) {
 	//console.log(req.query)
   res.render('form', {});
 });

router.post('/form', function(req, res, next) {
orders.push({
	food: req.body.foodName,
	name: req.body.clients
})

  res.render('form', {});
});

module.exports = router;
