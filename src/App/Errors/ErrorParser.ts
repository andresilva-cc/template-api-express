import BaseError from './BaseError';
import {
  BadRequestError, EmailAlreadyInUseError, ForbiddenError, ResourceNotFoundError,
  ServiceUnavailableError, ValidationError, UnauthorizedError, UnknownError,
} from '.';

export default class ErrorParser {
  public static parse(error: any): BaseError {
    switch (error.name) {
      case 'BadRequestError':
        return new BadRequestError(error.name, error.stack);

      case 'EmailAlreadyInUseError':
        return new EmailAlreadyInUseError();

      case 'ForbiddenError':
        return new ForbiddenError(error.name, error.stack);

      case 'ResourceNotFoundError':
        return new ResourceNotFoundError(error.name, error.stack);

      case 'ServiceUnavailableError':
      case 'SequelizeConnectionRefusedError':
        return new ServiceUnavailableError(error.name, error.stack);

      case 'SequelizeForeignKeyConstraintError':
      case 'SequelizeValidationError':
      case 'SequelizeUniqueConstraintError':
        return new ValidationError(
          error.errors?.[0]?.message,
          error.errors?.[0]?.path,
          error.errors?.[0]?.validatorKey,
          error.name,
          error.stack,
        );

      case 'UnauthorizedError':
        return new UnauthorizedError(error.name, error.stack);

      default:
        return new UnknownError(error.name, error.stack);
    }
  }
}
