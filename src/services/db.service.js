const { promisify } = require('util');
const mariadb = require('mysql');
const config = require('../configs/db.config');

const dbconfig = {
    host: config.db.host,
    user: config.db.user,
    password: config.db.pass,
    database: config.db.database,
    connectionLimit: 100,
    port: 3308,
    trace: true //esto se quita en prod
};

const pool = mariadb.createPool(dbconfig);

pool.getConnection((err, con) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST')
            console.error('Conección perdida');
        if (err.code === 'ER_CON_COUNT_ERROR')
            console.error('Demasiadas conexiones');
        if (err.code === 'ECONNREFUSED')
            console.error('Conexión rechazada');
        if (err.code === 'ER_ACCESS_DENIED_ERROR')
            console.error('Acceso denegado');
        console.error("El error es", err);
        return;
    }
    if (con) {
        con.release();
        console.log('Conectado a la db');
    }
    
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;
