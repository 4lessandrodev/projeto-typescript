import { Request, Response } from 'express';
import database from '../config/database';
import User from '../models/User';

export default {

    index: async (req: Request, res: Response) => {
        return res.status(200).json(database.users);
    },

    store: async (req: Request, res: Response) => {
        try {
            console.log(req);
            const { email, name, idade } = req.body;
            const user = new User(name, email, idade);
            User.save(user)
            return res.status(200).json({ msg: 'Usuário cadastrado com sucesso', users:database.users });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

};