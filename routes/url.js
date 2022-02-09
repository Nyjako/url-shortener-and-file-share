var express = require('express');
var router = express.Router();

function fill_data(data, db) {
    return router.get('/', function (req, res, next) {
        let id = req.query.id;

        db.find({ _id: id }, function (err, docs) {
            if (err || docs.length < 1) {
                res.render('wrong', {msg: "Your link is not correct"});
            }
            else if (docs[0].type == "link") {
                res.redirect(docs[0].url)
            }
            else if (docs[0].type == "file") {
                res.download(docs[0].path, docs[0].originalname)
            }
        });
    });
}

module.exports = fill_data;