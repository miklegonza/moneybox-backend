require('dotenv').config();

const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        database: process.env.DB_NAME
    },
    listPerPage: 10
};

module.exports = config;
