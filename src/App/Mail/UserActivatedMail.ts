import nodemailer from 'nodemailer';
import MailTemplate from './MailTemplate';

export default class UserActivatedMail extends MailTemplate {
  constructor(
    protected toName: string,
    protected toAddress: string,
  ) {
    super(toAddress);
  }

  public build(): nodemailer.SendMailOptions {
    return {
      ...super.build(),
      to: this.toAddress,
      subject: `Welcome to ${this.fromName}`,
      html: `
        Hello ${this.toName},<br><br>
        Your account has been activated. We hope you enjoy our application.<br><br><br>
        <b>Team ${this.fromName}</b>
      `,
    };
  }
}
