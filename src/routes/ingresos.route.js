const express = require('express');
const router = express.Router();
const ingresosController = require('../controllers/ingresos.controller');

router.get('/', ingresosController.get);

router.get('/sum', ingresosController.getEarningsById);

router.post('/', ingresosController.create);

router.put('/:id', ingresosController.update);

router.delete('/:id', ingresosController.remove);

module.exports = router;
