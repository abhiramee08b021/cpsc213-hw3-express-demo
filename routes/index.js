var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello world');
});

router.get('/protected', function(req, res, next) {
  res.status(401).send('get out!');
});

module.exports = router;
