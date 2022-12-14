const ingresosService = require('../services/ingresos.service');

async function get(req, res, next) {
    try {
        res.json(await ingresosService.get(req.query.page, req.query.username));
    } catch (err) {
        console.error('Get error:', err.message);
        next(err);
    }
}

async function getEarningsById(req, res, next) {
    try {
        res.json(await ingresosService.getEarningsById(req.query.username));
    } catch (err) {
        console.error('Get error:', err.message);
        next(err);
    }
}

async function create(req, res, next) {
    try {
        res.json(await ingresosService.create(req.body));
    } catch (err) {
        console.error('Post error:', err.message);
        next(err);
    }
}

async function update(req, res, next) {
    try {
        res.json(await ingresosService.update(req.params.id, req.body));
    } catch (err) {
        console.error('Put error:', err.message);
        next(err);
    }
}

async function remove(req, res, next) {
    try {
        res.json(await ingresosService.remove(req.params.id));
    } catch (err) {
        console.error('Delete error:', err.message);
        next(err);
    }
}

module.exports = { get, getEarningsById, create, update, remove }
