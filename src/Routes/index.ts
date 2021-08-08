import { Express } from 'express';
import Auth from './Auth';

const routes = [
  Auth,
];

export default function registerRoutes(application: Express) {
  routes.forEach((route) => route(application));
}
