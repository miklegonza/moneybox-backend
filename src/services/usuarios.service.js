const pool = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/db.config");

async function get(page = 1, username) {
    let stmt = (typeof username == "undefined") ? "SELECT * FROM " + config.db.database + ".usuarios;" : "SELECT * FROM " + config.db.database + ".usuarios WHERE usuario = ?;";

    const rows = await pool.query(stmt, username);
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return { data, meta };
}

async function create(user) {
    const data = [
        user.nombre,
        user.telefono,
        user.email,
        user.usuario,
        user.clave
    ];
    let stmt = "INSERT INTO " + config.db.database + ".usuarios (nombre, telefono, email, usuario, clave) VALUES (?, ?, ?, ?, ?)";
    const result = await pool.query(stmt, data);
    return result.affectedRows ? "Usuario creado" : "Error al crear usuario";
}

async function update(username, user) {
    const data = [
        user.nombre,
        user.telefono,
        user.email,
        username
    ];
    let stmt = "UPDATE " + config.db.database + ".usuarios SET nombre = ?, telefono = ?, email = ? WHERE usuario = ?;";
    const result = await pool.query(stmt, data);
    return result.affectedRows ? "Usuario modificado" : "Error al modificar usuario";
}

async function remove(username) {
    let stmt = "DELETE FROM " + config.db.database + ".usuarios WHERE usuario = ?;";
    const result = await pool.query(stmt, username);
    return result.affectedRows ? "Usuario eliminado" : "Error al eliminar usuario";
}

module.exports = { get, create, update, remove };
