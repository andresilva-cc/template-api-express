import nodemailer from 'nodemailer';
import MailTemplate from './MailTemplate';
import { APP_URL } from '../../Config/app';

class UserRegisteredMail extends MailTemplate {
  constructor(
    protected toName: string,
    protected toAddress: string,
    protected token: string,
  ) {
    super(toAddress);
  }

  public build(): nodemailer.SendMailOptions {
    return {
      ...super.build(),
      to: this.toAddress,
      subject: 'Activate your account',
      html: `
        Hello ${this.toName},<br><br>
        Thank you for registering. To activate your account, please access the URL below:<br><br>
        <a href="${this.getActivationURL()}">${this.getActivationURL()}</a><br><br><br>
        <b>${this.fromName}</b>
      `,
    };
  }

  private getActivationURL(): string {
    return `${APP_URL}/auth/activate/${this.token}`;
  }
}

export default UserRegisteredMail;
