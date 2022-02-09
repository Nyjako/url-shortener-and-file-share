var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const fs = require('fs');
const Datastore = require("nedb");
const config = require('./config/config.json');

if (!fs.existsSync('./database')) {
  fs.mkdirSync('./database');
}

const db = new Datastore({ filename: "./database/urls.db", autoload: true });

var indexRouter  = require('./routes/index')(config);
var resultRouter = require('./routes/result')(config);
var add_urlRouter = require('./routes/add_url')(config, db);
var url = require('./routes/url')(config, db);
var goto_urlRouter = require('./routes/goto_url');
var add_file = require('./routes/add_file')(config, db);


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Libs
app.use(express.static(path.join(__dirname, 'node_modules/d3/dist'))); // D3

app.use('/', indexRouter);
app.use('/result', resultRouter);
app.use('/addurl', add_urlRouter);
app.use('/url/*', goto_urlRouter);
app.use('/url', url);
app.use('/add-file', add_file);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
