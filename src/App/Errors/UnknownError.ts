import BaseError from './BaseError';

export default class UnknownError extends BaseError {
  constructor(
    public originalName?: string,
    public stackTrace?: string,
  ) {
    super(
      500,
      'UnknownError',
      'Unknown Error',
      'An error occurred, but it could not be identified.',
      originalName,
      stackTrace,
    );
  }
}
