import { Express } from 'express';
import AuthController from '../App/Controllers/AuthController';

export default (application: Express) => {
  application.post('/auth/register', AuthController.register);
};
