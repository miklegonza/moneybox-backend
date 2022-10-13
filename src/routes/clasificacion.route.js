const express = require('express');
const router = express.Router();
const clasificacionController = require('../controllers/clasificacion.controller');

router.get('/', clasificacionController.get);

router.post('/', clasificacionController.create);

router.put('/:id', clasificacionController.update);

router.delete('/:id', clasificacionController.remove);

module.exports = router;
