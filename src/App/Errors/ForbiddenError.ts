import BaseError from './BaseError';

export default class ForbiddenError extends BaseError {
  constructor(
    public originalName?: string,
    public stackTrace?: string,
  ) {
    super(
      403,
      'ForbiddenError',
      'Forbidden',
      'The provided token does not have access to the requested resource.',
      originalName,
      stackTrace,
    );
  }
}
