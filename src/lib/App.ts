import express from 'express';
import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Container } from 'injektion';
import * as routes from '../routes';
import { Logger } from '../app/Utils/Logger';
import * as models from '../app/Models';
import { Middleware } from './Middleware';
import { GlobalMiddlewareList } from './GlobalMiddlewareList';

class App {
  private app: express.Express;

  private sequelize?: Sequelize;

  constructor(
    private container: Container,
    middlewares: GlobalMiddlewareList,
    private databaseOptions: DatabaseOptions,
  ) {
    Logger.info('Initializing Express application...');
    this.app = express();

    this.registerContainerAsGlobal();
    this.registerMiddlewares(middlewares.pre);
    this.registerRoutes();
    this.registerMiddlewares(middlewares.post);
    this.createDatabaseConnection();
  }

  public getExpressInstance(): express.Express {
    return this.app;
  }

  private registerContainerAsGlobal() {
    global.container = this.container;
  }

  private registerMiddlewares(middlewares: Array<typeof Middleware>) {
    middlewares.forEach((middleware) => {
      if (middleware.isErrorHandlingMiddleware) {
        this.app.use(middleware.initializeErrorHandler.bind(middleware));
      } else {
        this.app.use(middleware.initialize.bind(middleware));
      }

      Logger.info(`Middleware registered: ${middleware.name}`);
    });
  }

  private registerRoutes() {
    Object.values(routes).forEach((routeGroup) => {
      routeGroup.forEach((route) => {
        this.app[route.method](route.path, route.handle.bind(route));
        Logger.info(`Route registered: ${route.method.toUpperCase()} ${route.path}`);
      });
    });
  }

  private createDatabaseConnection() {
    this.sequelize = new Sequelize({
      dialect: this.databaseOptions.dialect,
      host: this.databaseOptions.host,
      port: this.databaseOptions.port,
      database: this.databaseOptions.database,
      username: this.databaseOptions.username,
      password: this.databaseOptions.password,
      models: Object.values(models),
    });
    Logger.info('Database connection created');
  }

  // eslint-disable-next-line class-methods-use-this
  public async autoloadDependencies() {
    await global.container.autoload();
  }
}

interface DatabaseOptions {
  dialect?: Dialect;
  host?: string;
  port?: number;
  database?: string;
  username?: string;
  password?: string;
  storage?: string;
}

export { App };
