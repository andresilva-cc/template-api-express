import jwt from 'jsonwebtoken';
import { AUTH_SECRET } from '../../config/auth';

class TokenFacade {
  static async sign(payload: object, options?: jwt.SignOptions) {
    return jwt.sign(payload, AUTH_SECRET, options);
  }

  static verify(token: string, audience?: string) {
    return jwt.verify(token, AUTH_SECRET, { audience });
  }
}

export { TokenFacade };
