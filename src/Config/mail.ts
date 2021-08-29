import env from '../App/Utils/env';
import { parseBoolean } from '../App/Utils/helpers';

export const MAIL_SMTP_HOST = env('MAIL_SMTP_HOST', 'smtp.domain.com');

export const MAIL_SMTP_PORT = parseInt(env('MAIL_SMTP_PORT', '587'), 10);

export const MAIL_SMTP_SECURE = parseBoolean(env('MAIL_SMTP_SECURE', 'true'));

export const MAIL_SMTP_USERNAME = env('MAIL_SMTP_USERNAME', 'user@domain.com');

export const MAIL_SMTP_PASSWORD = env('MAIL_SMTP_PASSWORD', 'password');
