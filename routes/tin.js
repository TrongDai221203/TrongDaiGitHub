var express = require('express');
var router = express.Router();
var db=require('../models/database');


router.get('/txn', function(req, res, next) {
    db.query("select * from tin ORDER BY SoLanXem DESC LIMIT 10",
    (err, data)=>{
        if(err) throw new Error(err);
        res.json(data);
    })
});

router.get('/tnb', function(req, res, next) {
    db.query("select * from tin WHERE NoiBat=1 ORDER BY NoiBat DESC LIMIT 10",
    (err, data)=>{
        if(err) throw new Error(err);
        res.json(data);
    })
});
router.get('/:id', function(req, res, next) {
    let id = req.params.id;
    db.query(`select * from tin WHERE id=${id}`,
    (err, data)=>{
        if(err) throw new Error(err);
        res.json(data);
    })
});


module.exports = router;
