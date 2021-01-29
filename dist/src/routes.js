"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
var express_1 = __importDefault(require("express"));
// Services
var users_controller_1 = __importDefault(require("./api/controllers/users.controller"));
//Instância do Controller de Usuários
var usersController = new users_controller_1.default;
var routes = express_1.default.Router();
// Rotas de Usuários
routes.get('/users', usersController.list);
routes.post('/users', usersController.create);
routes.put('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.delete);
exports.default = routes;
