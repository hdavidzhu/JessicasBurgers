var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');

var app = express();
var favicon = require('serve-favicon');

var burgerRouter = require('routes/burger-router.js');

// Template engine.
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Set our port
var port = process.env.PORT || 3000; 

// Mongoose instance and connection to our mongolab database.
// var db = require('./db');

// Middleware.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static(path.join(__dirname, 'public')));

// Routing.
app.get('/', burgerRouter.home);
app.get('/ingredients', burgerRouter.ingredients);
app.get('/order', burgerRouter.order);
app.get('/kitchen', burgerRouter.kitchen);


app.listen(port);