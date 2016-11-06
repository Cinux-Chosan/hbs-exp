var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/1', function(req, res, next) {
  console.log("xxx============================xxx");
  res.send('{firstName:"xxx"}');
});

module.exports = router;
