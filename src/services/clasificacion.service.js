const pool = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/db.config");

async function get(page = 1, id) {
    let stmt = (typeof id == "undefined") ? "SELECT * FROM " + config.db.database + ".clasificacion;" : "SELECT * FROM " + config.db.database + ".clasificacion WHERE id = ?;";

    const rows = await pool.query(stmt, id);
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return { data, meta };
}

async function create(clasification) {
    const data = [
        clasification.tipo,
        clasification.periodo,
        clasification.valor
    ];
    let stmt = "INSERT INTO " + config.db.database + ".clasificacion (tipo, periodo, valor) VALUES (?, ?, ?)";
    const result = await pool.query(stmt, data);
    return result.affectedRows ? "Clasificacion creada" : "Error al crear clasificacion";
}

async function update(id, clasification) {
    const data = [
        clasification.tipo,
        clasification.periodo,
        clasification.valor,
        id
    ];
    let stmt = "UPDATE " + config.db.database + ".clasificacion SET tipo = ?, periodo = ?, valor = ? WHERE id = ?;";
    const result = await pool.query(stmt, data);
    return result.affectedRows ? "Clasificacion modificada" : "Error al modificar clasificacion";
}

async function remove(id) {
    let stmt = "DELETE FROM " + config.db.database + ".clasificacion WHERE id = ?;";
    const result = await pool.query(stmt, id);
    return result.affectedRows ? "Clasificacion eliminada" : "Error al eliminar clasificacion";
}

module.exports = { get, create, update, remove };
