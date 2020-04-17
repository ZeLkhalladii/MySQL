const express = require('express');
const router = express.Router();
const dbConf = require('../dbConfig/db.js');


// GET POST UPDATE DELETE

router.get('/all', (request, response) => {
    dbConf.query("SELECT * FROM citation", (err, result) => {
        if(err) throw err
        response.render('display.ejs', {data:result});
    })
})



router.post('/citation/add', (request, response) => {
    let txt = request.body.text;
    let idA = request.body.idAuteur;
    let src = request.body.source;
    dbConf.query("INSERT INTO citation (Texte, Source, id_Auteur) VALUES ('"+txt+"', '"+src+"', '"+idA+"')", (err, result) => {
        if(err) throw err
        response.redirect('/apis/citation');
    })
})


router.get('/citation/delete/:id', (request, response) => {
    idd = request.params.id;
    dbConf.query("DELETE FROM citation WHERE id= '"+idd+"'", (err, result) => {
        if(err) throw err
        response.redirect('/apis/all');
    })
})


module.exports = router;

