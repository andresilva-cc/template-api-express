import Passport from 'passport';
import Middleware from '../../lib/Middleware';

class PassportMiddleware extends Middleware {
  protected static override handle(): any {
    return Passport.initialize()(this.request, this.response, this.next);
  }
}

export default PassportMiddleware;
