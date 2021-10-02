import { Dialect } from 'sequelize';
import { App, Server } from './lib';
import middlewares from './middlewares/Global';

// Config
import {
  APP_PORT, APP_SSL, APP_SSL_KEY, APP_SSL_CERT,
} from './config/app';
import {
  DB_DIALECT, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD,
} from './config/database';

const app = new App(
  // Middlewares
  middlewares,

  // Database Options
  {
    dialect: DB_DIALECT as Dialect,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    username: DB_USERNAME,
    password: DB_PASSWORD,
  },
);

new Server(
  app.getExpressInstance(),
  {
    port: APP_PORT,
    enableSSL: APP_SSL,
    ssl: {
      key: APP_SSL_KEY,
      cert: APP_SSL_CERT,
    },
  },
).start();
