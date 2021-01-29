// Dependencies
import express from 'express'; 
// Services
import UsersController from './api/controllers/users.controller';

//Instância do Controller de Usuários
const usersController = new UsersController;

const routes = express.Router();

// Rotas de Usuários
routes.get('/users', usersController.list);
routes.post('/users', usersController.create);
routes.put('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.delete);

export default routes;