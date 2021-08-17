import bcrypt from 'bcrypt';

export default class PasswordFacade {
  public static hash(password: string): string {
    return bcrypt.hashSync(password, 12);
  }
}
