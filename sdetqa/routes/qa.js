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

module.exports = router;
