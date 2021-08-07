import env from '../App/Utils/env';
import { parseBoolean } from '../App/Utils/Helpers';

export const EMAIL_SMTP_HOST = env('EMAIL_SMTP_HOST', 'smtp.domain.com');

export const EMAIL_SMTP_PORT = env('EMAIL_SMTP_PORT', '587');

export const EMAIL_SMTP_SECURE = parseBoolean(env('EMAIL_SMTP_SECURE', 'true'));

export const EMAIL_SMTP_USERNAME = env('EMAIL_SMTP_USERNAME', 'user@domain.com');

export const EMAIL_SMTP_PASSWORD = env('EMAIL_SMTP_PASSWORD', 'password');
