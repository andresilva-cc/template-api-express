import bcrypt from 'bcrypt';

export default class PasswordFacade {
  public static hash(password: string): string {
    return bcrypt.hashSync(password, 12);
  }

  public static compare(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
