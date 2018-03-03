var express = require('express');
var mysql = require('./mysql');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  mysql.checkConnection();
  res.send('Website is alive! 1.0');
});




module.exports = router;
