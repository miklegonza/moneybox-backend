const express = require('express');
const router = express.Router();
const gastosController = require('../controllers/gastos.controller');

router.get('/', gastosController.get);

router.post('/', gastosController.create);

router.put('/:id', gastosController.update);

router.delete('/:id', gastosController.remove);

module.exports = router;
