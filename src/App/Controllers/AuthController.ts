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

  public static async activate(request: Request, response: Response, next: NextFunction) {
    try {
      await AuthService.activate(request.params.token);

      return response.status(200).send('Account activated, you can login now.');
    } catch (error) {
      if (error instanceof BadRequestError) {
        return response.status(400).send('Invalid activation token.');
      }

      return next(error);
    }
  }
}
