import { APP_ENV } from '../../config/app';

abstract class BaseError {
  constructor(
    public code: number,
    public name: string,
    public title: string,
    public description: string,
    public originalName?: string,
    public stackTrace?: string,
  ) {}

  public toPlainObject(): object {
    if (APP_ENV === 'development') {
      return {
        code: this.code,
        name: this.name,
        title: this.title,
        description: this.description,
        originalName: this.originalName,
        stackTrace: this.stackTrace,
      };
    }

    return {
      code: this.code,
      name: this.name,
      title: this.title,
      description: this.description,
    };
  }
}

export { BaseError };
