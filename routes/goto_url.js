var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    let id = req.originalUrl.split('/').pop();
    res.redirect(`/url?id=${id}`);
});

module.exports = router;