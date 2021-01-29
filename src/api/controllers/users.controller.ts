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
    async create(req: Request, res: Response) {
        await UsersService.create(req.body)
            .then((response: IUserModel) => res.status(200).json({ data: response }))
            .catch((error) => res.status(400).send({ error }));
    }
     /**
     * Realiza a atualização do usuário 
     */
    async update(req: Request, res: Response) {
        await UsersService.update(req.body, Number(req.params.id))
            .then((response: IUserModel) => res.status(200).json({ data: response }))
            .catch((error) => res.status(404).send({ error }));
    }
     /**
     * Realiza a listagem dos usuários 
     */
    async list(req: Request, res: Response) {
        await UsersService.list()
            .then((response: IUserModel[]) => res.status(200).json({ data: response }))
            .catch((error) => res.status(404).send({ error }));
    }
     /**
     * Realiza o delete do usuário 
     */
    async delete(req: Request, res: Response) {
        await UsersService.delete(Number(req.params.id))
            .then((response: IUserModel) => res.status(200).json({ data: response }))
            .catch((error) => res.status(404).send({ error }));
    }
}