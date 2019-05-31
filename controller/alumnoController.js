//var db = require('../conection_bd/bd');
var alumnos = require('../conection_bd/alumnos');

exports.home = (req, res) => {

    /*db.query('SELECT * FROM alumnos', (err, data) => {
        if (err) {
            console.log("Error: " + err);
            res.redirect('/')
        }*/

        res.render('pages/index', { alumnos: alumnos });

    //});


}
