const Programa = require('../models/associations/programa.association');
const Ficha = require('../models/associations/ficha.association');
const controller = require('../controllers/generic.controller');
const router = require('express').Router();

router.get('/programas',controller.getAll(Programa,[Ficha]));
router.get('/programas/search',controller.getByName(Programa,Ficha,'nombre'));
router.get('/programa/:id',controller.getById(Programa,[Ficha],'id'));
router.post('/programas',controller.create(Programa));

module.exports = router;