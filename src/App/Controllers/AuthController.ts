import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../Errors';
import { AuthService } from '../Services';

export default class AuthController {
  public static async register(request: Request, response: Response, next: NextFunction) {
    try {
      if (!request.body.email || !request.body.password) {
        throw new BadRequestError();
      }

      await AuthService.register(request.body.name, request.body.email, request.body.password);
      return response.sendStatus(201);
    } catch (error) {
      return next(error);
    }
  }
}
