const Ficha = require('../models/associations/ficha.association');
const Estudiante = require('../models/associations/estudiante.association');
const router = require('express').Router();
const controller = require('../controllers/generic.controller');

router.get('/fichas',controller.getAll(Ficha,[Estudiante],['programa']));
router.get('/fichas/:codigo',controller.getById(Ficha,[Estudiante],'codigo',['programa']));

module.exports = router;