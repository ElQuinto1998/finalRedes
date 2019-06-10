// load the things we need
var express = require('express');
var app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Concexiona db
//require('./conection_bd/bd');
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
var rutas = require('./routes/alumnoRoutes');

// index page 
app.use('/', rutas);


app.listen(8080);
console.log('8080 is the magic port');