import env from '../App/Utils/env';
import { parseBoolean } from '../App/Utils/Helpers';

export const APP_NAME = env('APP_NAME', 'My App');

export const APP_URL = env('APP_URL', 'http://api.myapp.com');

export const APP_SSL = parseBoolean(env('APP_SSL', 'false'));

export const APP_PORT = env('APP_PORT', '80');

export const APP_SSL_KEY = env('APP_SSL_KEY', '');

export const APP_SSL_CERT = env('APP_SSL_CERT', '');

export const APP_ENV = env('APP_ENV', 'development');
