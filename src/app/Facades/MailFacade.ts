import nodemailer from 'nodemailer';
import {
  MAIL_SMTP_HOST, MAIL_SMTP_PORT, MAIL_SMTP_USERNAME, MAIL_SMTP_PASSWORD,
} from '../../config/mail';

class MailFacade {
  private transport: nodemailer.Transporter;

  constructor() {
    this.transport = nodemailer.createTransport({
      host: MAIL_SMTP_HOST,
      port: MAIL_SMTP_PORT,
      auth: {
        user: MAIL_SMTP_USERNAME,
        pass: MAIL_SMTP_PASSWORD,
      },
    });
  }

  public async send(options: nodemailer.SendMailOptions): Promise<nodemailer.SentMessageInfo> {
    return this.transport.sendMail(options);
  }
}

export { MailFacade };
