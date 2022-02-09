var express = require('express');
var router = express.Router();

function fill_data(data) {
  /* GET home page. */
  return router.get('/', function(req, res, next) {
    res.render('index', data);
  });
}

module.exports = fill_data;
