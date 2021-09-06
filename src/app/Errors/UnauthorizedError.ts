import BaseError from './BaseError';

class UnauthorizedError extends BaseError {
  constructor(
    public originalName?: string,
    public stackTrace?: string,
  ) {
    super(
      401,
      'UnauthorizedError',
      'Unauthorized',
      'No authorization token was found.',
      originalName,
      stackTrace,
    );
  }
}

export default UnauthorizedError;
