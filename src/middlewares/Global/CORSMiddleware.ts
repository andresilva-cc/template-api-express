import cors from 'cors';
import { Middleware } from '../../lib/Middleware';

class CORSMiddleware extends Middleware {
  protected static override handle(): any {
    return cors()(this.request, this.response, this.next);
  }
}

export { CORSMiddleware };
