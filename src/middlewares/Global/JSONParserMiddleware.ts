import bodyParser from 'body-parser';
import Middleware from '../../lib/Middleware';

class JSONParserMiddleware extends Middleware {
  protected static override handle(): any {
    return bodyParser.json()(this.request, this.response, this.next);
  }
}

export default JSONParserMiddleware;
