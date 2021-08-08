import BaseError from './BaseError';

export default class ResourceNotFoundError extends BaseError {
  constructor(
    public originalName?: string,
    public stackTrace?: string,
  ) {
    super(
      404,
      'ResourceNotFoundError',
      'Resource Not Found',
      'The requested resource was not found or does not exist.',
      originalName,
      stackTrace,
    );
  }
}
