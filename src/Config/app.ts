export const APP_NAME = process.env.APP_NAME || 'My App';

export const APP_URL = process.env.APP_URL || 'http://api.myapp.com';

export const APP_USE_HTTPS = Boolean(process.env.APP_USE_HTTPS) || false;

export const APP_HTTP_PORT = process.env.APP_HTTP_PORT || '80';

export const APP_HTTPS_PORT = process.env.APP_HTTPS_PORT || '443';

export const APP_SSL_KEY = process.env.APP_SSL_KEY || '';

export const APP_SSL_CERT = process.env.APP_SSL_CERT || '';

export const APP_ENV = process.env.APP_ENV || 'development';
