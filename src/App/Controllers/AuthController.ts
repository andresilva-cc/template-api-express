import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../Services';

export default class AuthController {
  public static async register(_request: Request, response: Response, next: NextFunction) {
    try {
      const user = await AuthService.register();
      return response.status(201).send(user);
    } catch (error) {
      return next(error);
    }
  }
}
