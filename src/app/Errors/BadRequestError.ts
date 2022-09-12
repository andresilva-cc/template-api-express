import { BaseError } from './BaseError';

class BadRequestError extends BaseError {
  constructor(
    public originalName?: string,
    public stackTrace?: string,
  ) {
    super(
      400,
      'BadRequestError',
      'Bad Request',
      'The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
      originalName,
      stackTrace,
    );
  }
}

export { BadRequestError };
