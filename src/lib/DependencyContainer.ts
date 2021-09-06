import Logger from '../App/Utils/Logger';

class DependencyContainer {
  private dependencies: Record<string, any> = {};

  public register(key: string, value: any): void {
    if (this.dependencies[key]) {
      throw new Error(`Dependency ${key} is already registered.`);
    }

    this.dependencies[key] = value;
    Logger.info(`Dependency ${key} has been registered.`);
  }

  public get<T>(key: string): T {
    return this.dependencies[key];
  }
}

export default DependencyContainer;
