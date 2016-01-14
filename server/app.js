var express 	= require('express');
var routes 		= require('./route');
var bodyParser	= require('body-parser');
var app 		= express();
var session = require('express-session')
var path 		= require('path');
var morgan       = require('morgan');


//middleware
app.use('/', express.static(path.join(__dirname,'./../public')));
//app.use(morgan('dev'));
//app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',routes);


//create and start server
var port   = process.env.PORT || 3000;
var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Job App listening at http://%s:%s', host, port);

});