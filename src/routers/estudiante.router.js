const Estudiante = require('../models/estudiante.model');
const router = require('express').Router();
const controller = require('../controllers/generic.controller');

router.get('/estudiantes',controller.getAll(Estudiante))

module.exports = router;