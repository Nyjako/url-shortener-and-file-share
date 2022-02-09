var express = require('express');
var router = express.Router();

function fill_data(data, db) {
    return router.post('/', function (req, res, next) {
        let url = req.body.url;
        let data = {url: url, type: 'link'};
        
        db.find(data, function (err, docs) {
            if (err) {
                res.render('wrong', {msg: "Something went wrong while checking for url in db."})
            }
            else if (docs.length > 0) {
                res.render('wrong', {msg: "Url already exist in database."})
            }
            else {
                db.insert({url: url, type: 'link'}, function (err, newDoc) {
                    let key = newDoc._id
                    let return_url = `${req.get('host')}/url/${key}`
                    res.render('result', {...data, ...{url: return_url}});
                });
            }
        });

    });
}

module.exports = fill_data;