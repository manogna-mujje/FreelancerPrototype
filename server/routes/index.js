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
        } else {
          res.status(400).send('Username already exists');
        }
        return;
      }
      mysql.fetchData(callback, sql, object);
});

/* Login Page */

router.post('/login', function(req, res, next) {
  //Verify a record in the "USERS" table:
  var sql =  "SELECT USERNAME, USERPWD FROM USERS WHERE USERNAME = ? ";
  var object = [req.body.username];
  function callback (err, result) { 
    console.log(result.length);
    // console.log(req.session);
    if (result.length === 0) {
     res.status(404).send('Username does not exist.');
    } else {
      /* Convert RowDataPacket into JSON object*/
      var string=JSON.stringify(result);
      var json =  JSON.parse(string);

      if(json[0].USERPWD == req.body.password){
       req.session.user = req.body.username;
       console.log(req.session.user);
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
    return;
  }
  mysql.fetchData(callback, sql, object);
});


/* Profile Page */

router.post('/profile', function(req, res, next) {
  if (req.session && req.session.user) {
    var sql =  "SELECT USERNAME FROM USERS WHERE USERNAME = ? ";
    var object = [req.body.username];
    function callback (err, result) { 
      console.log(req.session.user);
        if (result.length != 0) {
          res.status(200).send(result);
        }
      return;
      }
    mysql.fetchData(callback, sql, object);
  }
}
);

router.get('/logout', function(req, res, next) {
  if (req.session && req.session.user) {
    req.session.destroy();
    res.status(200).send('Logout success');
  }
  res.status(200).send('Logout success');
});

router.get('/checkSession', function(req, res, next){
  if(req.session && req.session.user) {
    res.status(200).json({user: req.session.user});
  } else {
    res.status(404);
  }
})
module.exports = router;

