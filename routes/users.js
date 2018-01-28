var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/upper', function(req, res, next) {
  res.send(req.query.value.toUpperCase());
});

router.get('/reverse', function(req, res, next) {
    res.send(req.query.value.split("").reverse().join(""));
});

router.get('/concatenate', function(req, res, next) {
    var times = req.query.times;
    var value = req.query.value;
    var result = "";
    for (var i=0;i<times;i++) {
        result = result+value;
    }
    res.send(result);
});

module.exports = router;
