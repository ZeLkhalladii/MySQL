 // @ route to update the selected item

router.post('/citation/update/', (req, res, next) => {
    const input = req.body;
       identity = input.idCitation;
    let citationCore = input.core;
    let citationSource = input.source;
    let idAuth = input.authorid;
    const sql = "UPDATE citations SET Core= '" + citationCore + "', Source= '" + citationSource + "', id_Author= '" + idAuth + "' WHERE id = '" + identity + "' ";

    dbconfig.query(sql, (err) => {
        if (err) throw err
        res.redirect('/apis/citation/all');
    })
})

// @ route to get the specifique item using the id

router.get('/citation/edit/:id', (req, res, next) => {
    identity = req.params.id;
    const sql = "SELECT id, Core, Source, Date, id_Author FROM citations WHERE id = '" + identity + "'";
    dbconfig.query(sql, (err, result) => {
        if (err) throw err
        res.render('editCitation.ejs', { title: 'Edit', success: '', data: result });
    })
})



