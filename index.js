const express = require('express');
const usuariosRouter = require('./src/routes/usuarios.route');
const ingresosRouter = require('./src/routes/ingresos.route');
const gastosRouter = require('./src/routes/gastos.route');
const clasificacionRouter = require('./src/routes/clasificacion.route');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/usuarios', usuariosRouter);
//app.use('/ingresos', ingresosRouter);
//app.use('/gastos', gastosRouter);
app.use('/clasificacion', clasificacionRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

// Prueba 
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello world' })
});

//server
app.listen(PORT, () => console.log('Server on port: ', PORT));
