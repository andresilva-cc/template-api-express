import express, { NextFunction, Request, Response } from 'express';
import Handler from './Handler';

type MethodType = keyof typeof express.application;

class Route {
  constructor(
    public readonly method: MethodType,
    public readonly path: string,
    private readonly handler: Handler,
  ) {}

  public async handle(request: Request, response: Response, next: NextFunction) {
    const controller = <any>container.get(this.handler[0].name);
    controller[this.handler[1]](request, response, next);
  }
}

export default Route;
