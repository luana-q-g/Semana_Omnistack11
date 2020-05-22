const express = require("express"); //importa express
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


//conexao DB
const connection = require('./database/connection');

const routes = express.Router();

//criação de ong
routes.post('/ongs', OngController.create);
//listagem de ong
routes.get('/ongs', OngController.index);

//criação de caso
routes.post('/incidents', IncidentController.create);
//listagem de casos
routes.get('/incidents', IncidentController.index);
//remoção de caso
routes.delete('/incidents/:id', IncidentController.delete);

//listagem de casos de ongs especificas
routes.get('/profile', ProfileController.index);

//login
routes.post('/sessions', SessionController.create)

module.exports = routes;