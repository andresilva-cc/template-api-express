import { Middleware } from '../../lib/Middleware';
import { BaseError } from '../../app/Errors/BaseError';
import { ErrorParser } from '../../app/Errors/ErrorParser';

class ErrorMiddleware extends Middleware {
  public static override isErrorHandlingMiddleware = true;

  protected static handle(): any {
    if (!this.error) {
      return this.next();
    }

    if (this.isErrorProperlyFormatted()) {
      return this.sendErrorResponse();
    }

    return this.parseErrorAndSendResponse();
  }

  private static isErrorProperlyFormatted() {
    return this.error instanceof BaseError;
  }

  private static sendErrorResponse() {
    return this.response
      .status(this.error.code)
      .send(this.error.toPlainObject());
  }

  private static parseErrorAndSendResponse() {
    this.error = ErrorParser.parse(this.error);
    return this.sendErrorResponse();
  }
}

export { ErrorMiddleware };
