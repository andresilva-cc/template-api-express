import dotenv from 'dotenv';

dotenv.config();

export default function env(key: string, defaultValue: string = ''): string {
  return process.env[key] || defaultValue;
}
