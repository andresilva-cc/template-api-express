import { BaseError } from './BaseError';

class InvalidCredentialsError extends BaseError {
  constructor() {
    super(
      401,
      'InvalidCredentialsError',
      'Invalid Credentials',
      'The provided email and/or password are incorrect',
    );
  }
}

export { InvalidCredentialsError };
