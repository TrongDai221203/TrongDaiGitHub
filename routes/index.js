var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tin', { title: 'Express' });
});


router.get('/', function(req, res, next) {
  res.render('tin', { title: 'Express' });
});
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
   
  res.render('chitiet', { id : id  });
});
module.exports = router;
