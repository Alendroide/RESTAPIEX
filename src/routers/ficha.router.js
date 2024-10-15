const Ficha = require('../models/associations/ficha.association');
const Estudiante = require('../models/associations/estudiante.association');
const Programa = require('../models/associations/programa.association');
const router = require('express').Router();
const controller = require('../controllers/generic.controller');

router.get('/fichas',controller.getAll(Ficha,[Programa,Estudiante],['programa']));
router.get('/ficha/:codigo',controller.getById(Ficha,[Programa,Estudiante],'codigo',['programa']));
router.post('/fichas',controller.create(Ficha));

module.exports = router;