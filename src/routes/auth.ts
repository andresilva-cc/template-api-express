import { Route } from '../lib/Facades';
import { AuthController } from '../app/Controllers';

export default [
  Route.post('/auth/login', [AuthController, 'login']),
  Route.post('/auth/register', [AuthController, 'register']),
  Route.get('/auth/activate/:token', [AuthController, 'activate']),
];
