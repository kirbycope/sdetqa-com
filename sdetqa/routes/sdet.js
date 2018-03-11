'use strict';
// Load the external dependencies (from package.json)
var express = require('express');
var router = express.Router();

/* GET 'SDET' page. */
router.get('/', function (req, res) {
    res.render('sdet', {
        static_path: 'public',
        theme: process.env.THEME || 'slate',
        flask_debug: process.env.FLASK_DEBUG || 'false'
    });
});

/* GET 'SDET - API' page. */
router.get('/api', function (req, res) {
    var jsonData = require('../data/sdet-api.json');
    res.render('sdet/api', {
        static_path: 'public',
        theme: process.env.THEME || 'slate',
        flask_debug: process.env.FLASK_DEBUG || 'false',
        data: jsonData,
        slide: req.query.slide || 0
    });
});

/* GET 'SDET - Framework' page. */
router.get('/framework', function (req, res) {
    var jsonData = require('../data/sdet-framework.json');
    res.render('sdet/framework', {
        static_path: 'public',
        theme: process.env.THEME || 'slate',
        flask_debug: process.env.FLASK_DEBUG || 'false',
        data: jsonData,
        slide: req.query.slide || 0
    });
});

/* GET 'SDET - Mobile' page. */
router.get('/mobile', function (req, res) {
    var jsonData = require('../data/sdet-mobile.json');
    res.render('sdet/mobile', {
        static_path: 'public',
        theme: process.env.THEME || 'slate',
        flask_debug: process.env.FLASK_DEBUG || 'false',
        data: jsonData,
        slide: req.query.slide || 0
    });
});

/* GET 'SDET - Web' page. */
router.get('/web', function (req, res) {
    var jsonData = require('../data/sdet-web.json');
    res.render('sdet/web', {
        static_path: 'public',
        theme: process.env.THEME || 'slate',
        flask_debug: process.env.FLASK_DEBUG || 'false',
        data: jsonData,
        slide: req.query.slide || 0
    });
});

module.exports = router;
