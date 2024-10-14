const Estudiante = require('../models/associations/estudiante.association');
const Ficha = require('../models/associations/ficha.association');
const router = require('express').Router();
const controller = require('../controllers/generic.controller');
const uploadImg = require('../middlewares/uploadImg');

router.get('/estudiantes',controller.getAll(Estudiante,[Ficha],['ficha']));
router.get('/estudiantes/search',controller.getByName(Estudiante,[Ficha],'nombre'))
router.get('/estudiante/:identificacion',controller.getById(Estudiante,[Ficha],'identificacion',['ficha']));
router.post('/estudiantes',uploadImg,controller.upload(Estudiante));

module.exports = router;