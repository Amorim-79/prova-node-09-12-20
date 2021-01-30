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
    static async create(user: IUserModel): Promise<IUserModel> {
        // Verifica se o usuário já existe no banco de dados
        const userExist = await database('users')
            .where('username', user.username)
            .orWhere('email', user.email)
            .first();

        // Caso o usuário não exista realiza o insert e retorna o objeto adicionado ao banco
        let userData: IUserModel;
        if (!userExist) {
            const id = await database('users').insert(user);
            userData = await database('users').where('id', id).first().select('*');
        }

        return new Promise((resolve, reject) => {
            if (userData) {
                resolve(userData);
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
    static async update(user: IUserModel, id: number): Promise<IUserModel> {
        const userResponse: number = await database('users')
            .where('id', id)
            .first()
            .update(user);
        
        const userData: IUserModel = await database('users')
        .where('id', id)
        .first()
        .select('*');

        return new Promise((resolve, reject) => {
            if (userResponse && userData) {
                resolve(userData);
            } else {
                reject(userConstants.userNotFound);
            }
        });
    }
    /**
     * Lista todos usuário no banco de dados
     * @param queryParams Query parâmetros passados na request (pageNumber)
     */
    static async list(queryParams: any): Promise<IUserModel[]> {
        const pageNumber = queryParams.pageNumber;
        // Retorna todos os usuários do banco, utilizando paginação
        const userData: any = await database('users').paginate({
            perPage: 15,
            currentPage: pageNumber
        });

        return new Promise((resolve, reject) => {
            if (userData) {
                resolve(userData);
            } else {
                reject(userConstants.thereAreNoUsers);
            }
        });
    }
    /**
     * Deleta o usuário no banco de dados
     * @param id Id do usuário
     */
    static async delete(id: number): Promise<IUserModel> {
        const userData: IUserModel = await database('users')
            .where('id', id)
            .first()
            .select('*');

        const userResponse: number = await database('users')
            .where('id', id)
            .first()
            .delete();

        return new Promise((resolve, reject) => {
            if (userResponse && userData) {
                resolve(userData);
            } else {
                reject(userConstants.userNotFound);
            }
        });
    }
}