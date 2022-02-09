var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const fs = require('fs');
const Datastore = require("nedb");
const config = require('./config/config.json');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync( config.salt_rounds );

if (!fs.existsSync('./database')) {
  fs.mkdirSync('./database');
}

const db = {
  urls:  new Datastore({ filename: "./database/urls.db", autoload: true, timestampData: true }),
  files: new Datastore({ filename: "./database/files.db", autoload: true, timestampData: true })
};

var indexRouter = require('./routes/index')(config);
var usersRouter = require('./routes/users');



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
app.use('/users', usersRouter);

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
