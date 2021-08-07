import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import App from './App';
import {
  APP_PORT, APP_SSL, APP_SSL_KEY, APP_SSL_CERT,
} from './Config/app';

new App(
  // Options
  {
    port: APP_PORT,
    enableSSL: APP_SSL,
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
