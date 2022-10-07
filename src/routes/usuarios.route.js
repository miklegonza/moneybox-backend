//Aquí van las rutas con express.Router(); (métodos HTTP)
//Se llaman a los controladores

const express = require('express');
const router = express.Router();
const usuarios = require('../services/usuarios.service');

router.get('/', async (req, res, next) => {
    try {
        res.json(await usuarios.get(req.query.page));
    } catch (err) {
        console.error('Get error:', err.message);
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        res.json(await usuarios.create(req.body));
    } catch (err) {
        console.error('Post error:', err.message);
        next(err);
    }
});

router.put('/:username', async (req, res, next) => {
    try {
        res.json(await usuarios.update(req.params.username, req.body));
    } catch (err) {
        console.error('Post error:', err.message);
        next(err);
    }
});

router.delete('/:username', async (req, res, next) => {
    try {
        res.json(await usuarios.remove(req.params.username));
    } catch (err) {
        console.error('Post error:', err.message);
        next(err);
    }
});

module.exports = router;
