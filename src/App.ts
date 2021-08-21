import fs from 'fs';
import http from 'http';
import https from 'https';
import express from 'express';
import Passport from 'passport';
import { Sequelize } from 'sequelize-typescript';
import { errorMiddleware } from './Middlewares';
import registerRoutes from './Routes';
import Logger from './App/Utils/Logger';
import * as models from './App/Models';

export default class App {
  private app: express.Express;

  private options: AppOptions;

  private sequelize?: Sequelize;

  constructor(options: AppOptions, middlewares: any, authStrategies: Passport.Strategy[]) {
    Logger.info('Initializing Express application...');
    this.app = express();
    this.options = options;

    this.registerMiddlewares(middlewares);
    App.registerAuthStrategies(authStrategies);
    this.registerRoutes();
    this.registerErrorMiddleware();
    this.createDatabaseConnection();
  }

  private registerMiddlewares(middlewares: express.NextFunction[]) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
      Logger.info(`Middleware registered: ${middleware.name}`);
    });
  }

  private static registerAuthStrategies(strategies: Passport.Strategy[]) {
    strategies.forEach((strategy) => {
      Passport.use(strategy);
      Logger.info(`Auth strategy registered: ${strategy.name}`);
    });
  }

  private registerRoutes() {
    registerRoutes(this.app);
    Logger.info('Routes registered');
  }

  private registerErrorMiddleware() {
    this.app.use(errorMiddleware);
    Logger.info('Error midleware registered');
  }

  private createDatabaseConnection() {
    this.sequelize = new Sequelize({
      dialect: this.options.database.dialect,
      host: this.options.database.host,
      port: this.options.database.port,
      database: this.options.database.database,
      username: this.options.database.username,
      password: this.options.database.password,
      models: Object.values(models),
    });
    Logger.info('Database connection created');
  }

  start() {
    if (this.options.enableSSL) {
      const options = {
        key: fs.readFileSync(this.options.ssl.key),
        cert: fs.readFileSync(this.options.ssl.cert),
      };

      https.createServer(options, this.app).listen(this.options.port, () => {
        Logger.success(`HTTPS: Listening on port ${this.options.port}`);
      });
    } else {
      http.createServer(this.app).listen(this.options.port, () => {
        Logger.success(`HTTP: Listening on port ${this.options.port}`);
      });
    }
  }
}

interface AppOptions {
  port: number;
  enableSSL: boolean;
  ssl: SSLOptions;
  database: DatabaseOptions;
}

interface SSLOptions {
  key: string;
  cert: string;
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

export type Dialect = 'mysql' | 'mariadb' | 'sqlite' | 'postgres' | 'mssql';
