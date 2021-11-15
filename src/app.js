const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const config = require('../constants/env');

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

mongoose.connect(config.url_connection, config.options);

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!');
});

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!');
});

const indexRoute = require('./routes/index');

app.use('/', indexRoute);

app.listen(config.port, () => {
    console.log('Servidor rodando...');
});

module.exports = app;