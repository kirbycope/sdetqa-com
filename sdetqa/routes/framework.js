'use strict';
// Load the external dependencies (from package.json)
var express = require('express');
var router = express.Router();
// Load the JSON file
var jsonData = require('../data/framework.json');

/* GET 'Framework' page. */
router.get('/', function (req, res) {
    res.render('framework', {
        static_path: 'public',
        theme: process.env.THEME || 'slate',
        flask_debug: process.env.FLASK_DEBUG || 'false',
        data: jsonData,
        slide: req.query.slide || 0
    });
});

module.exports = router;
