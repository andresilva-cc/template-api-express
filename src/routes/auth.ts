import { Express } from 'express';
import localAuthStrategyMiddleware from '../middlewares/Auth/localStrategyMiddleware';
import { AuthController } from '../app/Controllers';

export default (application: Express) => {
  application.post('/auth/login', localAuthStrategyMiddleware);
  application.post('/auth/register', AuthController.register);
  application.get('/auth/activate/:token', AuthController.activate);
};
