import { Express } from 'express';
import HelloWorld from './HelloWorld';

const routes = [
  HelloWorld,
];

export default function registerRoutes(application: Express) {
  routes.forEach((route) => route(application));
}
