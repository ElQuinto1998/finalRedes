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
exports.agregar = (req, res) => {
    res.render('pages/agregarAlumno');
}

exports.crear = (req, res) => {
    console.log(req.body);

    let alumno = {
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        semestre: req.body.semestre
    };

    /*db.query("INSERT INTO alumnos (nombre, codigo, semestre) VALUES(?, ?, ?)", [alumno.nombre, alumno.codigo, alumno.semestre], 
    function (err, result) {
        if (err) throw err;
        console.log("Alumno agregado con exito");
    });*/

    alumnos.push(alumno);

    res.redirect('/');
}

