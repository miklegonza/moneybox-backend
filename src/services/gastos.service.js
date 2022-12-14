const pool = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/db.config");

async function get(page = 1, usuario) {
    let stmt = (typeof usuario == "undefined") ? "SELECT * FROM " + config.db.database + ".gastos;" : "SELECT * FROM " + config.db.database + ".gastos WHERE usuario = ?;";

    const rows = await pool.query(stmt, usuario);
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return { data, meta };
}

async function create(gasto) {
    let tipo = (typeof gasto.tipo == "undefined") ? "" : gasto.tipo;
    const data = [
        gasto.gasto,
        tipo,
        gasto.fecha,
        gasto.valor,
        gasto.usuario,
        gasto.origen
    ];
    let stmt = "INSERT INTO " + config.db.database + ".gastos (gasto, tipo, fecha, valor, usuario, origen) VALUES (?, ?, ?, ?, ?, ?)";
    const result = await pool.query(stmt, data);
    return result.affectedRows ? "Gasto creado" : "Error al crear gasto";
}

async function update(id, gasto) {
    let tipo = (typeof gasto.tipo == "undefined") ? "" : gasto.tipo;
    const data = [
        gasto.gasto,
        tipo,
        gasto.fecha,
        gasto.valor,
        gasto.origen,
        id
    ];
    let stmt = "UPDATE " + config.db.database + ".gastos SET gasto = ?, tipo = ?, fecha = ?, valor = ?, origen = ? WHERE id = ?;";
    const result = await pool.query(stmt, data);
    return result.affectedRows ? "Gasto modificado" : "Error al modificar gasto";
}

async function remove(id) {
    let stmt = "DELETE FROM " + config.db.database + ".gastos WHERE id = ?;";
    const result = await pool.query(stmt, id);
    return result.affectedRows ? "Gasto eliminado" : "Error al eliminar gasto";
}

module.exports = { get, create, update, remove };
