const pool = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/db.config");

async function get() {
    let stmt = "SELECT FROM";
    const rows = await pool.query("Select statement");
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return { data, meta };
}

async function create(user) {
    const user = {
        name,
    };
    let stmt = "INSERT INTO";
    const result = await pool.query(" statement");
    return result.affectedRows ? "Usuario creado" : "Error al crear usuario";
}

async function update(username, user) {
    let stmt = "UPDATE SET";
    const result = await pool.query(" statement");
    return result.affectedRows ? "Usuario creado" : "Error al crear usuario";
}

async function remove(username) {
    let stmt = "DELETE FROM";
    const result = await pool.query(" statement");
    return result.affectedRows ? "Usuario creado" : "Error al crear usuario";
}

module.exports = { get, create, update, remove };
