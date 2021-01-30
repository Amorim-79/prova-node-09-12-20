"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Services
const users_service_1 = __importDefault(require("../services/users.service"));
class UsersController {
    /**
     * Realiza a criação do usuário
     */
    static async create(req, res) {
        await users_service_1.default.create(req.body)
            .then((response) => res.status(200).json({ data: response }))
            .catch((error) => res.status(400).send({ error }));
    }
    /**
    * Realiza a atualização do usuário
    */
    static async update(req, res) {
        await users_service_1.default.update(req.body, Number(req.params.id))
            .then((response) => res.status(200).json({ data: response }))
            .catch((error) => res.status(404).send({ error }));
    }
    /**
    * Realiza a listagem dos usuários
    */
    static async list(req, res) {
        await users_service_1.default.list(req.query)
            .then((response) => res.status(200).json(response))
            .catch((error) => res.status(404).send({ error }));
    }
    /**
    * Realiza o delete do usuário
    */
    static async delete(req, res) {
        await users_service_1.default.delete(Number(req.params.id))
            .then((response) => res.status(200).json({ data: response }))
            .catch((error) => res.status(404).send({ error }));
    }
}
exports.default = UsersController;
