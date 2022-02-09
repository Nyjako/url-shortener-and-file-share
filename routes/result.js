var express = require('express');
var router = express.Router();

function fill_data(data) {
  return router.get('/', function(req, res, next) {
    
    res.render('result', {...data, ...{url: `${req.get('host')}/url/${req.query.URL}`}});
  });
}

module.exports = fill_data;
