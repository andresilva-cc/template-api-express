import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import App from './App';
import {
  APP_USE_HTTPS, APP_HTTP_PORT, APP_HTTPS_PORT, APP_SSL_KEY, APP_SSL_CERT,
} from './Config/app';

dotenv.config();

new App(
  // Options
  {
    port: APP_USE_HTTPS ? APP_HTTPS_PORT : APP_HTTP_PORT,
    enableHTTPS: APP_USE_HTTPS,
    ssl: {
      key: APP_SSL_KEY,
      cert: APP_SSL_CERT,
    },
  },

  // Middlewares
  [
    morgan('dev'),
    cors(),
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json(),
  ],
).start();
