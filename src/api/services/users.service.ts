// Database
import database from '../database/connection';
// Models
import { IUserModel } from '../models/user.model';
// Constants
import userConstants from '../constants/users.constants';

export default class UsersService {
    /**
     * Cria o usuário no banco de dados
     * @param user Objeto usuário
     */
    static async create(user: IUserModel): Promise<any> {
        // Verifica se o usuário já existe no banco de dados
        const userExist = await database('users')
            .where('username', user.username)
            .orWhere('email', user.email)
            .first();

        // Caso o usuário não exista realiza o insert
        let userResponse: IUserModel;
        if (!userExist) {
            userResponse = await database('users').insert(user, '[*]');
        }

        return new Promise((resolve, reject) => {
            if (userResponse) {
                resolve(userResponse);
            } else {
                reject(userConstants.userAlreadyExist);
            }
        });
    }
    /**
     * Atualiza o usuário no banco de dados
     * @param user Objeto usuário
     * @param id Id do usuário
     */
    static async update(user: IUserModel, id: number): Promise<any> {
        const userResponse: IUserModel = await database('users')
            .where('id', id)
            .first()
            .update(user, '[*]');

        return new Promise((resolve, reject) => {
            if (userResponse) {
                resolve(userResponse);
            } else {
                reject(userConstants.userNotFound);
            }
        });
    }
    /**
     * Lista todos usuário no banco de dados
     */
    static async list(): Promise<any> {
        const usersResponse: IUserModel[] = await database('users').select('*');

        return new Promise((resolve, reject) => {
            if (usersResponse.length > 0) {
                resolve(usersResponse);
            } else {
                reject(userConstants.thereAreNoUsers);
            }
        });
    }
    /**
     * Deleta o usuário no banco de dados
     * @param id Id do usuário
     */
    static async delete(id: number): Promise<any> {
        const userResponse: IUserModel = await database('users')
            .where('id', id)
            .first()
            .delete('[*]');

        return new Promise((resolve, reject) => {
            if (userResponse) {
                resolve(userResponse);
            } else {
                reject(userConstants.userNotFound);
            }
        });
    }
}