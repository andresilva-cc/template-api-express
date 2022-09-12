import { BaseError } from './BaseError';

class ValidationError extends BaseError {
  constructor(
    public description: string,
    public field?: string,
    public validator?: string,
    public originalName?: string,
    public stackTrace?: string,
  ) {
    super(
      400,
      'ValidationError',
      'Validation Error',
      description,
      originalName,
      stackTrace,
    );
  }

  public override toPlainObject(): object {
    return {
      ...super.toPlainObject(),
      field: this.field,
      validator: this.validator,
    };
  }
}

export { ValidationError };
