//html routes DONE
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');
var express = require('express');
var app = express();


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get('/survey.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    // If no matching route is found default to home
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });
};
