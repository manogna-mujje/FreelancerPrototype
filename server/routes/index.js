var express = require('express');
var mysql = require ('./mysql');
const uuidv4 = require('uuid/v4');


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
  console.log('Login API hit.');
  // res.send('Success');
  //Verify a record in the "USERS" table:
  var sql =  "SELECT USERNAME, USERPWD FROM USERS WHERE USERNAME = ? ";
  var object = [req.body.username];
  function callback (err, result) { 
    console.log(result.length);
    console.log(req.session);
    if (result.length === 0) {
    //  res.status(404).send('Username does not exist.');
     throw new Error('Username does not exist.');
    } else {
      /* Convert RowDataPacket into JSON object*/
      var string=JSON.stringify(result);
      var json =  JSON.parse(string);

      if(json[0].USERPWD == req.body.password){
       req.session.user = req.body.username;
       console.log(req.session.user);
        res.status(200).send('Login successful');
      } else {
        throw new Error('Incorrect Password');
    // res.status(400).send('Incorrect Password')
      }
    }
  }
  mysql.fetchData(callback, sql, object);
});

/* Validate Username */

router.post('/validateUsername', function(req, res, next) {
  console.log('validateUsername API hit.');
  console.log(req.session.user);
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
  console.log('Profile API hit.');
  console.log(req.session.user);
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
  console.log('Logout API hit.');
  console.log(req.session);
  if (req.session && req.session.user) {
    req.session.reset();
    console.log(req.session);
    res.status(200).send('Logout success');
  } else {
    res.status(400).send('Already logged out.');
  }
 
});

router.get('/checkSession', function(req, res, next){
  console.log('Session API hit.')
  console.log(req.session);
  if(req.session && req.session.user) {
    console.log('Session existing')
    res.status(200).json({user: req.session.user});
  }
  else {
    console.log('Error: Session ended')
    throw ('Session already ended.');
    // res.status(400);
  }
});

/* Post Project */

router.post('/postProject', function(req, res, next) {
  let randomId = uuidv4();
  //Insert a record in the "USERS" table:
  var sql = "INSERT INTO PROJECTS SET ?";
  var object = {
                PROJECTID: randomId , 
                PROJECTNAME: req.body.title, 
                DESCRIPTION: req.body.description,
                SKILLS: req.body.skills,
                PROJECTOWNER: req.body.owner,
                ESTIMATEDBUDGET: req.body.budget
              };
  function callback (err, result) { 
    if(result){
      console.log("1 record inserted");
      res.status(200).send('Project Posted successfully');
    } else {
      res.status(400).send('Error occured while posting project to Database.');
    }
    return;
  }
  mysql.fetchData(callback, sql, object);
});

router.post('/postBid', function(req, res, next) {
  let randomId = uuidv4();
  //Insert a record in the "USERS" table:
  var sql = "INSERT INTO BIDS SET ?";
  var object = {
                BIDID: randomId , 
                PROJECTID: req.body.projectId, 
                FREELANCERUSERNAME: req.body.freelancerUsername,
                BIDAMOUNT: req.body.bidAmount,
                EMPLOYERUSERNAME: req.body.employerUsername
              };
  function callback (err, result) { 
    if(result){
      console.log("1 record inserted");
      res.status(200).send('Bid posted successfully');
    } else {
      res.status(400).send('Error occured while posting project to Database.');
    }
    return;
  }
  mysql.fetchData(callback, sql, object);
});

router.post('/showBids', function(req, res, next) {
  console.log('Bids API hit.');
  console.log(req.session);
  console.log(req.body.project);
  if (req.session && req.session.user) {
    var sql =  "SELECT * FROM BIDS WHERE PROJECTID = (SELECT PROJECTID FROM PROJECTS WHERE PROJECTNAME = ?) ";
    var object = [req.body.project];
    function callback (err, result) { 
      console.log(req.session.user);
      /* Convert RowDataPacket into JSON object*/
      var string=JSON.stringify(result);
      var json =  JSON.parse(string);
      console.log(JSON.stringify(json));
      res.status(200).json({
        list: JSON.stringify(json)
      });
      return;
      }
    mysql.fetchData(callback, sql, object);
  }
});

router.post('/showProjectDetails', function(req, res, next) {
  console.log('Show Projects API hit.');
  console.log(req.session);
  console.log(req.body.project);
  if (req.session && req.session.user) {
    var sql =  "SELECT * FROM PROJECTS WHERE PROJECTNAME = ? ";
    var object = [req.body.project];
    function callback (err, result) { 
      console.log(req.session.user);
      /* Convert RowDataPacket into JSON object*/
      var string=JSON.stringify(result);
      var json =  JSON.parse(string);
      console.log(JSON.stringify(json));
      res.status(200).json({
        list: JSON.stringify(json)
      });
      return;
      }
    mysql.fetchData(callback, sql, object);
  }
}
);

module.exports = router;

