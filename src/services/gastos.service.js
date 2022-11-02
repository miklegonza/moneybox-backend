const pool = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/db.config");

async function get(page = 1, id) {
    let stmt = (typeof id == "undefined") ? "SELECT * FROM " + config.db.database + ".gastos;" : "SELECT * FROM " + config.db.database + ".gastos WHERE usuario = ?;";

    const rows = await pool.query(stmt, id);
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return { data, meta };
}

async function create(gasto) {
    const data = [
        gasto.gasto,
        gasto.fecha,
        gasto.valor,
        gasto.usuario,
        gasto.origen
    ];
    let stmt = "INSERT INTO " + config.db.database + ".gastos (gasto, fecha, valor, usuario, origen) VALUES (?, ?, ?, ?, ?)";
    const result = await pool.query(stmt, data);
    return result.affectedRows ? "Gasto creado" : "Error al crear gasto";
}

async function update(id, gasto) {
    const data = [
        gasto.gasto,
        gasto.fecha,
        gasto.valor,
        gasto.origen,
        id
    ];
    let stmt = "UPDATE " + config.db.database + ".gastos SET gasto = ?, fecha = ?, valor = ?, origen = ? WHERE id = ?;";
    const result = await pool.query(stmt, data);
    return result.affectedRows ? "Gasto modificado" : "Error al modificar gasto";
}

async function remove(id) {
    let stmt = "DELETE FROM " + config.db.database + ".gastos WHERE id = ?;";
    const result = await pool.query(stmt, id);
    return result.affectedRows ? "Gasto eliminado" : "Error al eliminar gasto";
}

module.exports = { get, create, update, remove };
