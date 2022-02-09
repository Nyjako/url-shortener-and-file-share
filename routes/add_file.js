var express = require('express');
var router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

function fill_data(data, db) {
    return router.post('/', upload.single('file'), function (req, res, next) {
        
        let file = req.file;
        if (file != undefined || file != null) {
            let file_data = {...{type: 'file'}, ...file};
            db.find({originalname: file_data.originalname, encoding: file_data.encoding, size: file_data.size}, function (err, docs) {
                if (err) {
                    res.render('wrong', {msg: "Something went wrong while checking for file in database."});
                }
                else if (docs > 0) {
                    res.render('wrong', {msg: `File already exist in database. URL: ${req.get('host')}/url/${docs[0]._id}`});
                }
                else {
                    db.insert(file_data, function (err, newDoc) {
                        let key = newDoc._id
                        let return_url = `${req.get('host')}/url/${key}`
                        res.render('result', {...data, ...{url: return_url}});
                    });
                }
            });
        }
        else {
            res.render('wrong', {msg: "Something went wrong while recesiving file."});
        }
    });
}

module.exports = fill_data;