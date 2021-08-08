import { Request, Response, NextFunction } from 'express';
import BaseError from '../App/Errors/BaseError';
import ErrorParser from '../App/Errors/ErrorParser';

export default (error: any, _request: Request, response: Response, next: NextFunction) => {
  if (!error) {
    return next();
  }

  if (error instanceof BaseError) {
    return response.status(error.code).send(error.toPlainObject());
  }

  const parsedError = ErrorParser.parse(error);
  return response.status(parsedError.code).send(parsedError.toPlainObject());
};
