const express = require("express"); //importa express
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require("./routes");

const app = express();

//npm start

/**
 * GET: buscar/listar uma info no backend
 * POST: criar uma info no backend
 * PUT: alterar info do backend
 * DELETE: deletar info do backend
 */

/**
 * Tipos de parâmetros:
 * query params: parâmetros nomeados, enviados na rota após a ? (filtros, paginação)
 * route params: parâmetros utilizados para identificar recursos
 * request body: corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users'). select('*').where()
 * npm install knex
 * npx knex init
 */
app.use(cors());
app.use(express.json()); //para receber o request do body
app.use(routes);
app.use(errors());

module.exports = app;