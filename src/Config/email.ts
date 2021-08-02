export const EMAIL_SMTP_HOST = process.env.EMAIL_SMTP_HOST || 'smtp.domain.com';

export const EMAIL_SMTP_PORT = process.env.EMAIL_SMTP_PORT || '587';

export const EMAIL_SMTP_SECURE = Boolean(process.env.EMAIL_SMTP_SECURE) || true;

export const EMAIL_SMTP_USERNAME = process.env.EMAIL_SMTP_USERNAME || 'user@domain.com';

export const EMAIL_SMTP_PASSWORD = process.env.EMAIL_SMTP_PASSWORD || 'password';
