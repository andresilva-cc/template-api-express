import { Express } from 'express';
import { AuthController } from '../App/Controllers';

export default (application: Express) => {
  application.post('/auth/register', AuthController.register);
};
