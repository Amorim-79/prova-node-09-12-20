// Dependencies
import express from 'express'; 
// Controllers
import UsersController from './api/controllers/users.controller';
// Validators
import UsersValidator from './api/validators/users.validator';

const routes = express.Router();

// Rotas de Usuários
routes.get('/users', UsersController.list);
routes.post('/users', UsersValidator ,UsersController.create);
routes.put('/users/:id', UsersValidator, UsersController.update);
routes.delete('/users/:id', UsersController.delete);

export default routes;