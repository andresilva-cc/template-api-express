import nodemailer from 'nodemailer';
import { APP_NAME } from '../../config/app';
import { MAIL_SMTP_USERNAME } from '../../config/mail';

abstract class MailTemplate {
  protected fromName: string;

  protected fromAddress: string;

  constructor(protected toAddress: string) {
    this.fromName = APP_NAME;
    this.fromAddress = MAIL_SMTP_USERNAME;
  }

  public build(): nodemailer.SendMailOptions {
    return {
      from: `"${this.fromName}" <${this.fromAddress}>`,
    };
  }
}

export { MailTemplate };
