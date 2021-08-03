import { Express } from 'express';
import HelloWorldController from '../App/Controllers/HelloWorldController';

export default (application: Express) => {
  application.get('/', HelloWorldController.helloWorld);
};
