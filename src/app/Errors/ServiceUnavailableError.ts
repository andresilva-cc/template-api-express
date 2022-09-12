import { BaseError } from './BaseError';

class ServiceUnavailableError extends BaseError {
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

export { ServiceUnavailableError };
