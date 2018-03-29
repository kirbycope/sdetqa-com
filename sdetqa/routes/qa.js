'use strict';
// Load the external dependencies (from package.json)
var express = require('express');
var router = express.Router();

/* GET 'QA' page. */
router.get('/', function (req, res) {
    res.render('qa', {
        static_path: 'public',
        theme: process.env.THEME || 'slate',
        flask_debug: process.env.FLASK_DEBUG || 'false'
    });
});

/* GET 'ISTQB Foundation Level Study Guide' page. */
router.get('/istqb-foundation-level', function (req, res) {
    var jsonData = require('../data/istqb-foundation-level.json');
    res.render('qa/istqb-foundation-level', {
        static_path: 'public',
        theme: process.env.THEME || 'slate',
        flask_debug: process.env.FLASK_DEBUG || 'false',
        data: jsonData,
        slide: req.query.slide || 0
    });
});

/* GET 'API Testing' page. */
router.get('/api', function (req, res) {
    var jsonData = require('../data/qa-api.json');
    res.render('qa/api', {
        static_path: 'public',
        theme: process.env.THEME || 'slate',
        flask_debug: process.env.FLASK_DEBUG || 'false',
        data: jsonData,
        slide: req.query.slide || 0
    });
});


module.exports = router;
