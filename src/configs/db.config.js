const config = {
    db: {
        host: process.env.HOST,
        user: process.env.USER,
        pass: process.env.PASS,
        database: process.env.DB,
    },
    listPerPage: 10
};

module.exports = config;
