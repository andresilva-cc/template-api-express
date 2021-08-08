import { Request, Response } from 'express';
import AuthService from '../Services/AuthService';

export default class AuthController {
  public static async register(_request: Request, response: Response) {
    const user = await AuthService.register();
    response.status(201).send(user);
  }
}
