﻿'use strict';
// Load the external dependencies (from package.json)
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Load the internal dependencies (.js files)
var index = require('./routes/index');
var microcenter = require('./routes/microcenter');
var qa = require('./routes/qa');
var sdet = require('./routes/sdet');

// Create an Express application
var app = express();

// Set the View Engine for the Express application
app.set('view engine', 'ejs');
app.use('/views', express.static(path.resolve(__dirname, 'views')));
app.use('/public', express.static(path.resolve(__dirname, 'public')));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Setup app routes (controllers)
app.use('/', index);
app.use('/microcenter', microcenter);
app.use('/qa', qa);
app.use('/sdet', sdet);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

// Start the server
var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
