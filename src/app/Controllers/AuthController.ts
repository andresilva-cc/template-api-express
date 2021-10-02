import { NextFunction, Request, Response } from 'express';
import { ActivateAction, LoginAction, RegisterAction } from '../Actions/Auth';
import { BadRequestError } from '../Errors';
import container from '../../container';

class AuthController {
  private static activateAction = <ActivateAction>container.get('ActivateAction');

  private static loginAction = <LoginAction>container.get('LoginAction');

  private static registerAction = <RegisterAction>container.get('RegisterAction');

  public static async login(request: Request, response: Response, next: NextFunction) {
    try {
      if (!request.body.email || !request.body.password) {
        throw new BadRequestError();
      }

      const authData = await AuthController.loginAction.run({
        email: request.body.email,
        password: request.body.password,
      });

      return response.status(200).send(authData);
    } catch (error) {
      return next(error);
    }
  }

  public static async register(request: Request, response: Response, next: NextFunction) {
    try {
      if (!request.body.email || !request.body.password) {
        throw new BadRequestError();
      }

      await AuthController.registerAction.run({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
      });

      return response.sendStatus(201);
    } catch (error) {
      return next(error);
    }
  }

  public static async activate(request: Request, response: Response, next: NextFunction) {
    try {
      await AuthController.activateAction.run({
        token: request.params.token,
      });

      return response.status(200).send('Account activated, you can login now.');
    } catch (error) {
      if (error instanceof BadRequestError) {
        return response.status(400).send('Invalid activation token.');
      }

      return next(error);
    }
  }
}

export default AuthController;
