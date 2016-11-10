var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/1', function(req, res, next) {
  console.log("xxx============================xxx");
  let data = {
    data: {
      id: 2,
      type: "person",
      attributes: {
        "first-me": "张"
      }
    }
  };
  res.send(JSON.stringify(data));
});

module.exports = router;
