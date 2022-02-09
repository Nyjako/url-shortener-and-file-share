var express = require('express');
var router = express.Router();

function fill_data(data, db) {
    return router.post('/', function (req, res, next) {
        let url = req.body.url;

        db.urls.insert({url: url}, function (err, newDoc) {
            let key = newDoc._id
            let return_url = `${req.get('host')}/url/${key}`
            res.render('result', {...data, ...{url: return_url}});
        });

    });
}

module.exports = fill_data;