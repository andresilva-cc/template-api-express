import morgan from 'morgan';
import { Middleware } from '../../lib/Middleware';

class LoggerMiddleware extends Middleware {
  protected static override handle(): any {
    return morgan('dev')(this.request, this.response, this.next);
  }
}

export { LoggerMiddleware };
