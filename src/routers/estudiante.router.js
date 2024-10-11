const Estudiante = require('../models/associations/estudiante.association');
const Ficha = require('../models/associations/ficha.association');
const router = require('express').Router();
const controller = require('../controllers/generic.controller');

router.get('/estudiantes',controller.getAll(Estudiante,[Ficha],['ficha']));
router.get('/estudiantes/:identificacion',controller.getById(Estudiante,[Ficha],'identificacion',['ficha']));
router.post('/estudiantes',controller.create(Estudiante));

module.exports = router;