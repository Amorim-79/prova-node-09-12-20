// Dependencies
import {Request, Response} from 'express';
// Services
import UsersService from "../services/users.service";
// Models
import { IUserModel } from '../models/user.model';

export default class UsersController {
    /**
     * Realiza a criação do usuário
     */
    static async create(req: Request, res: Response) {
        await UsersService.create(req.body)
            .then((response: IUserModel) => res.status(200).json({ data: response }))
            .catch((error) => res.status(400).send({ error }));
    }
     /**
     * Realiza a atualização do usuário
     */
    static async update(req: Request, res: Response) {
        await UsersService.update(req.body, Number(req.params.id))
            .then((response: IUserModel) => res.status(200).json({ data: response }))
            .catch((error) => res.status(404).send({ error }));
    }
     /**
     * Realiza a listagem dos usuários
     */
    static async list(req: Request, res: Response) {
        await UsersService.list(req.query)
            .then((response: IUserModel[]) => res.status(200).json(response))
            .catch((error) => res.status(404).send({ error }));
    }
     /**
     * Realiza o delete do usuário
     */
    static async delete(req: Request, res: Response) {
        await UsersService.delete(Number(req.params.id))
            .then((response: IUserModel) => res.status(200).json({ data: response }))
            .catch((error) => res.status(404).send({ error }));
    }
}