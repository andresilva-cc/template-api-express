import { env } from '../app/Utils/env';

export const DB_HOST = env('DB_HOST', 'localhost');

export const DB_DIALECT = env('DB_DIALECT', 'postgres');

export const DB_PORT = parseInt(env('DB_PORT', '5432'), 10);

export const DB_DATABASE = env('DB_DATABASE', 'database');

export const DB_USERNAME = env('DB_USERNAME', 'user');

export const DB_PASSWORD = env('DB_PASSWORD', 'password');
