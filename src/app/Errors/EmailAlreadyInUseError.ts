import { BaseError } from './BaseError';

class EmailAlreadyInUseError extends BaseError {
  constructor() {
    super(
      400,
      'EmailAlreadyInUseError',
      'Email Already In Use',
      'The provided e-mail is already being used by another account.',
    );
  }
}

export { EmailAlreadyInUseError };
