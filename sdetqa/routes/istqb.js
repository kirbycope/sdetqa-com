'use strict';
// Load the external dependencies (from package.json)
var express = require('express');
var router = express.Router();
// Load the JSON file
var jsonData = require('../data/istqb-foundation-level.json');

/* GET 'ISTQB Foundation Level Study Guide' page. */
router.get('/istqb-foundation-level', function (req, res) {
    res.render('istqb-foundation-level', {
        static_path: 'public',
        theme: process.env.THEME || 'slate',
        flask_debug: process.env.FLASK_DEBUG || 'false',
        data: jsonData,
        slide: req.query.slide || 0
    });
});

module.exports = router;
