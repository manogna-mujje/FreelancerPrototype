var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var index = require('./routes/index');
var ejs = require('ejs');
const cors = require('cors');

var app = express();

app.set('port', process.env.PORT || 3001);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);


//Cross-Origin connection
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Server is up and running at port ' + app.get('port'));
});

module.exports = app;