import dotenv from 'dotenv';

dotenv.config();

function env(key: string, defaultValue: string = ''): string {
  return process.env[key] || defaultValue;
}

export default env;
