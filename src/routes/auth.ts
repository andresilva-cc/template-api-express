import { Express } from 'express';
import { AuthController } from '../app/Controllers';

export default (application: Express) => {
  application.post('/auth/login', AuthController.login);
  application.post('/auth/register', AuthController.register);
  application.get('/auth/activate/:token', AuthController.activate);
};
