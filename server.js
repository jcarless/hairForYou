// initial requires
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Emails = require('./app/model/emails.model');
var logger = require('morgan');



var app = express();



// use body-parser to help express handle requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Database configuration
mongoose.connect('mongodb://admin:admin@ds019033.mlab.com:19033/hairtocare');
var db = mongoose.connection;

app.use(logger('dev'));


db.on('error', function(err) {
	console.log('Mongoose Error: ', err);
});
db.once('open', function() {
	console.log('Mongoose connection successful.');
});

// // set up handlebars for express
// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({
//   defaultLayout: 'main',
//     extname: '.handlebars',
//     layoutsDir: 'app/views/layouts'
// }));
//
// app.set('view engine', 'handlebars');
// app.set('views', __dirname + '/app/views');

// load the static files
var staticContentFolder = __dirname + '/app/public';
app.use(express.static(staticContentFolder));


// require the html path
require("./app/routes/htmlRoutes.js")(app);

// start the server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log('Find the magic at port: ' + PORT);
});