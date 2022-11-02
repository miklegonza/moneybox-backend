const pool = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/db.config");

async function get(page = 1, usuario) {
    let stmt = (typeof usuario == "undefined") ? "SELECT * FROM " + config.db.database + ".ingresos;" : "SELECT * FROM " + config.db.database + ".ingresos WHERE usuario = ?;";

    const rows = await pool.query(stmt, usuario);
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return { data, meta };
}

async function create(ingreso) {
    const data = [
        // ingreso.ingreso,
        ingreso.valor,
        ingreso.usuario
    ];
    let stmt = "INSERT INTO " + config.db.database + ".ingresos (valor, usuario) VALUES (?, ?)";
    const result = await pool.query(stmt, data);
    return result.affectedRows ? "Ingreso creado" : "Error al crear ingreso";
}

async function update(id, ingreso) {
    const data = [
        ingreso.valor,
        id
    ];
    let stmt = "UPDATE " + config.db.database + ".ingresos SET valor = ? WHERE id = ?;";
    const result = await pool.query(stmt, data);
    return result.affectedRows ? "Ingreso modificado" : "Error al modificar ingreso";
}

async function remove(id) {
    let stmt = "DELETE FROM " + config.db.database + ".ingresos WHERE id = ?;";
    const result = await pool.query(stmt, id);
    return result.affectedRows ? "Ingreso eliminado" : "Error al eliminar ingreso";
}

module.exports = { get, create, update, remove };
