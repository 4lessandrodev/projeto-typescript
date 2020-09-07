import { Router } from 'express';
const routes = Router();
import userController from './controllers/UserController';

routes.get('/users', userController.index);

routes.post('/users', userController.store);

export default routes;