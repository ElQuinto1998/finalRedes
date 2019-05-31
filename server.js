// load the things we need
var express = require('express');
var app = express();

//Concexiona db
//require('./conection_bd/bd');
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
var rutas = require('./routes/alumnoRoutes');

// index page 
app.use('/', rutas);
// about page 
app.get('/about', function(req, res) {
	res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');