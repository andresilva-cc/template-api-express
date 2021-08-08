import BaseError from './BaseError';

export default class ServiceUnavailableError extends BaseError {
  constructor(
    public originalName?: string,
    public stackTrace?: string,
  ) {
    super(
      503,
      'ServiceUnavailableError',
      'Service Unavailable',
      'The service is currently temporarily unavailable.',
      originalName,
      stackTrace,
    );
  }
}
