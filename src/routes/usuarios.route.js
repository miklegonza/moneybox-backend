const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

router.get('/', usuariosController.get);

router.post('/', usuariosController.create);

router.put('/:username', usuariosController.update);

router.delete('/:username', usuariosController.remove);

module.exports = router;
