import { Express } from 'express';
import auth from './auth';

const routes = [
  auth,
];

export default function registerRoutes(application: Express) {
  routes.forEach((route) => route(application));
}
