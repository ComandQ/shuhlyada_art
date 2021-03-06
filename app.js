/* global global, config */


// set up ========================
var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration =================
global.config = require('config');

console.log('##############33', config);

//mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io

app.use(express.static(path.join(__dirname, '/public')));            // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname }); // load the single view file (angular will handle the page changes on the front-end)
});

// catch 404 and render it
//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/error.html', 404);
});

// listen (start app with node server.js) ======================================
app.listen(8088);
console.log("App listening on port 8088");