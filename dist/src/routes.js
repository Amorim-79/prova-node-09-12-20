"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const express_1 = __importDefault(require("express"));
// Controllers
const users_controller_1 = __importDefault(require("./api/controllers/users.controller"));
// Validators
const users_validator_1 = __importDefault(require("./api/validators/users.validator"));
const routes = express_1.default.Router();
// Rotas de Usuários
routes.get('/users', users_controller_1.default.list);
routes.post('/users', users_validator_1.default, users_controller_1.default.create);
routes.put('/users/:id', users_validator_1.default, users_controller_1.default.update);
routes.delete('/users/:id', users_controller_1.default.delete);
exports.default = routes;
