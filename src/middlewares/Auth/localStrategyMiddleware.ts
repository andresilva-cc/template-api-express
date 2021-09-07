import { NextFunction, Request, Response } from 'express';
import Passport from 'passport';
import { BadRequestError } from '../../app/Errors';
import { TokenFacade } from '../../app/Facades';

function localStrategyMiddleware(
  request: Request, response: Response, next: NextFunction,
) {
  // TODO: Check if Passport somehow automatically checks this
  if (!request.body.email || !request.body.password) {
    throw new BadRequestError();
  }

  Passport.authenticate('local', { session: false }, async (err: any, user: object) => {
    if (err) {
      return next(err);
    }

    const token = await TokenFacade.sign(user);

    return response.status(200).send({
      user,
      token,
    });
  })(request, response, next);
}

export default localStrategyMiddleware;
