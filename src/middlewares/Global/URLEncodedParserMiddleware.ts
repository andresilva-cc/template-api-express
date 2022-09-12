import bodyParser from 'body-parser';
import { Middleware } from '../../lib/Middleware';

class URLEncodedParserMiddleware extends Middleware {
  protected static override handle(): any {
    return bodyParser.urlencoded({
      extended: true,
    })(this.request, this.response, this.next);
  }
}

export { URLEncodedParserMiddleware };
