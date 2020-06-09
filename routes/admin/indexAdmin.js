var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('admin/indexAdmin', { titulo: 'Administrador'});

});

router.get('/usuarios', function(req, res, next){

  res.render('admin/usuariosAdmin');

});

router.get('/eventos', function(req, res, next){
  
  res.render('admin/eventosAdmin');

});

router.get('/mensajes', function(req, res, next){

  res.render('admin/mensajesAdmin');

});

module.exports = router;
