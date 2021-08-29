import { Request, Response, NextFunction } from 'express';
import BaseError from '../App/Errors/BaseError';
import ErrorParser from '../App/Errors/ErrorParser';

const sendErrorResponse = (error: any, response: Response) => response
  .status(error.code)
  .send(error.toPlainObject());

const parseErrorAndSendResponse = (error: any, response: Response) => {
  const parsedError = ErrorParser.parse(error);
  return sendErrorResponse(parsedError, response);
};

const isErrorProperlyFormatted = (error: any) => error instanceof BaseError;

export default (error: any, _request: Request, response: Response, next: NextFunction) => {
  if (!error) {
    return next();
  }

  if (isErrorProperlyFormatted(error)) {
    return sendErrorResponse(error, response);
  }

  return parseErrorAndSendResponse(error, response);
};
