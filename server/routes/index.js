var express = require('express');
var mysql = require ('./mysql');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Server is alive! 1.0');
});


/* Signup Page */

router.post('/signup', function(req, res, next) {
      //Insert a record in the "USERS" table:
      var sql = "INSERT INTO USERS SET ?";
      var object = {EMAIL: req.body.email, USERNAME: req.body.username, USERPWD: req.body.password};
      function callback (err, result) { 
        if(result){
          console.log("1 record inserted");
          res.status(200).send('Signup successful');
        }
        res.status(400).send('Username already exists');
      }
      mysql.fetchData(callback, sql, object);
});

/* Login Page */

router.post('/login', function(req, res, next) {
  //Verify a record in the "USERS" table:
  var sql =  "SELECT USERNAME, USERPWD FROM USERS WHERE USERNAME = ? ";
  var object = [req.body.username];
  function callback (err, result) { 
    if (result.length === 0) {
      res.status(404).send('Username does not exist.');
    } else {
      /* Convert RowDataPacket into JSON object*/
      var string=JSON.stringify(result);
      var json =  JSON.parse(string);

      if(json[0].USERPWD == req.body.password){
        res.status(200).send('Login successful');
      } else {
        res.status(400).send('Incorrect Password')
      }
    }
  }
  mysql.fetchData(callback, sql, object);
});

/* Validate Username */

router.post('/validateUsername', function(req, res, next) {
  var sql =  "SELECT USERNAME FROM USERS WHERE USERNAME = ? ";
  var object = [req.body.username];
  function callback (err, result) { 
    if (result.length === 0) {
      res.status(200).send('Username can be accepted');
    } else {
      res.status(400).send('Username already exists');
    }
  }
  mysql.fetchData(callback, sql, object);
});
module.exports = router;

