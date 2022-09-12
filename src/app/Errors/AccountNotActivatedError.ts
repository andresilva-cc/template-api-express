import { BaseError } from './BaseError';

class AccountNotActivatedError extends BaseError {
  constructor() {
    super(
      401,
      'AccountNotActivatedError',
      'Account Not Activated',
      'Your account has not been activated yet, check your e-mail.',
    );
  }
}

export { AccountNotActivatedError };
