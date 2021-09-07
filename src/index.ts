import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import Passport from 'passport';
import App, { Dialect } from './App';
import {
  APP_PORT, APP_SSL, APP_SSL_KEY, APP_SSL_CERT,
} from './config/app';
import {
  DB_DIALECT, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD,
} from './config/database';
import * as authStrategies from './app/Auth';

new App(
  // Options
  {
    port: APP_PORT,
    enableSSL: APP_SSL,
    ssl: {
      key: APP_SSL_KEY,
      cert: APP_SSL_CERT,
    },
    database: {
      dialect: DB_DIALECT as Dialect,
      host: DB_HOST,
      port: DB_PORT,
      database: DB_DATABASE,
      username: DB_USERNAME,
      password: DB_PASSWORD,
    },
  },

  // Middlewares
  [
    morgan('dev'),
    cors(),
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json(),
    Passport.initialize(),
  ],

  // Auth strategies
  Object.values(authStrategies),
).start();
