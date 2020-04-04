const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();


app.use(cors());
//Informar que estaremos utilizando JSON para as requisições
app.use(express.json()); 
app.use(routes);
app.use(errors());

module.exports = app;

/*
* TIPOS DE PARAMETROS
* Query Params: Parâmetros nomeados enviados na rota após "?"  (Filtros e paginação)
* Query Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizdo para criar e alterar recursos
*/

/**
 * TIPO DE BANCO DE DADOS
 * SQL: MYSQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, ClouchDB
 */
/**
 * PARA MANIPULAR BANCO DE DADOS DUAS FORMAS
 * 1) Instalando os DRIVE de qual arquitetura que deseja usar
 *    ex: SELECT * FROM users
 * 2) Usar uma Query Builder por ser o ==>> KNEX.JS
 *    ex: table('users').select('*').where(...)...
 */