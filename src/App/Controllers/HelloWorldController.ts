import { Request, Response } from 'express';

export default class HelloWorldController {
  public static helloWorld(_request: Request, response: Response) {
    response.status(200).send('Hello, World!');
  }
}
