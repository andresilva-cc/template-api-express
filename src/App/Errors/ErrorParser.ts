import BaseError from './BaseError';
import BadRequestError from './BadRequestError';
import ForbiddenError from './ForbiddenError';
import ResourceNotFoundError from './ResourceNotFoundError';
import ServiceUnavailableError from './ServiceUnavailableError';
import ValidationError from './ValidationError';
import UnauthorizedError from './UnauthorizedError';
import UnknownError from './UnknownError';

export default class ErrorParser {
  public static parse(error: any): BaseError {
    switch (error.name) {
      case 'BadRequestError':
        return new BadRequestError(error.name, error.stack);

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
