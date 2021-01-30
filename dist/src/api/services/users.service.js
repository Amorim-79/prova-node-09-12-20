"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Database
const connection_1 = __importDefault(require("../database/connection"));
// Constants
const users_constants_1 = __importDefault(require("../constants/users.constants"));
class UsersService {
    /**
     * Cria o usuário no banco de dados
     * @param user Objeto usuário
     */
    static async create(user) {
        // Verifica se o usuário já existe no banco de dados
        const userExist = await connection_1.default('users')
            .where('username', user.username)
            .orWhere('email', user.email)
            .first();
        // Caso o usuário não exista realiza o insert e retorna o objeto adicionado ao banco
        let userData;
        if (!userExist) {
            const id = await connection_1.default('users').insert(user);
            userData = await connection_1.default('users').where('id', id).first().select('*');
        }
        return new Promise((resolve, reject) => {
            if (userData) {
                resolve(userData);
            }
            else {
                reject(users_constants_1.default.userAlreadyExist);
            }
        });
    }
    /**
     * Atualiza o usuário no banco de dados
     * @param user Objeto usuário
     * @param id Id do usuário
     */
    static async update(user, id) {
        const userResponse = await connection_1.default('users')
            .where('id', id)
            .first()
            .update(user);
        const userData = await connection_1.default('users')
            .where('id', id)
            .first()
            .select('*');
        return new Promise((resolve, reject) => {
            if (userResponse && userData) {
                resolve(userData);
            }
            else {
                reject(users_constants_1.default.userNotFound);
            }
        });
    }
    /**
     * Lista todos usuário no banco de dados
     * @param queryParams Query parâmetros passados na request (pageNumber)
     */
    static async list(queryParams) {
        const pageNumber = queryParams.pageNumber;
        // Retorna todos os usuários do banco, utilizando paginação
        const userData = await connection_1.default('users').paginate({
            perPage: 15,
            currentPage: pageNumber
        });
        return new Promise((resolve, reject) => {
            if (userData) {
                resolve(userData);
            }
            else {
                reject(users_constants_1.default.thereAreNoUsers);
            }
        });
    }
    /**
     * Deleta o usuário no banco de dados
     * @param id Id do usuário
     */
    static async delete(id) {
        const userData = await connection_1.default('users')
            .where('id', id)
            .first()
            .select('*');
        const userResponse = await connection_1.default('users')
            .where('id', id)
            .first()
            .delete();
        return new Promise((resolve, reject) => {
            if (userResponse && userData) {
                resolve(userData);
            }
            else {
                reject(users_constants_1.default.userNotFound);
            }
        });
    }
}
exports.default = UsersService;
