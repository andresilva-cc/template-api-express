import { NextFunction, Request, Response } from 'express';

abstract class Middleware {
  public static isErrorHandlingMiddleware = false;

  protected static error: any;

  protected static request: Request;

  protected static response: Response;

  protected static next: NextFunction;

  public static initialize(request: Request, response: Response, next: NextFunction): any {
    this.setProperties(request, response, next);
    return this.handle();
  }

  public static initializeErrorHandler(
    error: any, request: Request, response: Response, next: NextFunction,
  ): any {
    this.setProperties(request, response, next, error);
    return this.handle();
  }

  private static setProperties(
    request: Request, response: Response, next: NextFunction, error?: any,
  ): any {
    this.error = error;
    this.request = request;
    this.response = response;
    this.next = next;
  }

  protected static handle(): any {
    return this.next();
  }
}

export { Middleware };
