import { Express } from 'express';
import auth from './auth';

const routes = [
  auth,
];

function registerRoutes(application: Express) {
  routes.forEach((route) => route(application));
}

export default registerRoutes;
