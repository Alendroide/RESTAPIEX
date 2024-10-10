const Estudiante = require('../models/estudiante.model');
const router = require('express').Router();
const controller = require('../controllers/generic.controller');

router.get('/estudiantes',controller.getAll(Estudiante))
router.get('/estudiantes/:identificacion',controller.getById(Estudiante,[],'identificacion'));
router.post('/estudiantes',controller.create(Estudiante));
module.exports = router;