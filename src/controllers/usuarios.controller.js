const usuariosService = require('../services/usuarios.service');

async function get(req, res, next) {
    try {
        res.json(await usuariosService.get(req.query.page));
    } catch (err) {
        console.error('Get error:', err.message);
        next(err);
    }
}

async function create(req, res, next) {
    try {
        res.json(await usuariosService.create(req.body));
    } catch (err) {
        console.error('Post error:', err.message);
        next(err);
    }
}

async function update(req, res, next) {
    try {
        res.json(await usuariosService.update(req.params.username, req.body));
    } catch (err) {
        console.error('Put error:', err.message);
        next(err);
    }
}

async function remove(req, res, next) {
    try {
        res.json(await usuariosService.remove(req.params.username));
    } catch (err) {
        console.error('Delete error:', err.message);
        next(err);
    }
}

module.exports = {
    get,
    create,
    update,
    remove
}
