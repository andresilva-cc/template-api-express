import { Express } from 'express';
import { localAuthStrategyMiddleware } from '../Middlewares';
import { AuthController } from '../App/Controllers';

export default (application: Express) => {
  application.post('/auth/login', localAuthStrategyMiddleware);
  application.post('/auth/register', AuthController.register);
  application.get('/auth/activate/:token', AuthController.activate);
};
