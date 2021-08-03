import fs from 'fs';
import http from 'http';
import https from 'https';
import express from 'express';
import registerRoutes from './Routes';
import Logger from './App/Utils/Logger';

export default class App {
  private app: express.Express;

  private options: AppOptions;

  constructor(options: AppOptions, middlewares: any) {
    Logger.info('Initializing Express application...');
    this.app = express();

    this.options = options;

    this.loadMiddlewares(middlewares);

    registerRoutes(this.app);
    Logger.info('Routes registered');
  }

  private loadMiddlewares(middlewares: express.NextFunction[]) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
      Logger.info(`Middleware loaded: ${middleware.name}`);
    });
  }

  start() {
    if (this.options.enableHTTPS) {
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
  port: string;
  enableHTTPS: boolean;
  ssl: SSLOptions;
}

interface SSLOptions {
  key: string;
  cert: string;
}
