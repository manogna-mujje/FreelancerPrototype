var express = require('express');
var mysql = require('mysql');

var router = express.Router();

/*  Database Connection Setup  */

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'freelancer',
  port	 : 3306
});

var connected;

connection.connect(function(err) {
  if (err) {
      connected = false;
      throw err;
  } else {
      console.log("Connected!");
      connected = true;
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  mysql.insert();
  res.send('Website is alive! 1.0');
});


/* Signup Page */

router.post('/signup', function(req, res, next) {
    if (connected){
      //Insert a record in the "USERS" table:
      var sql = "INSERT INTO USERS SET ?";
      connection.query(
        sql, 
        {EMAIL: req.body.email, USERNAME: req.body.username, USERPWD: req.body.password}, 
        function(err, result) { 
          if (err) {
            res.status(400).send('Username already exists');
            console.log (err);
          }
          console.log("1 record inserted");
          res.status(200).send('Signup successful');
      });
  }
});

/* Login Page */

router.post('/login', function(req, res, next) {
  if (connected){
    //Insert a record in the "USERS" table:
    var usr = req.body.username;
    console.log(usr);
    connection.query(
      "SELECT USERNAME, USERPWD FROM USERS WHERE USERNAME = ? " ,
      [usr],
      function(err, result) { 
        if (err){
          console.log(err);
        }
        if (result.length === 0) {
          res.status(404).send('Username does not exist. Please Sign up.');
          return;
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
    });
}
});

module.exports = router;

