import User from '../Models/User';

export default class AuthService {
  public static async register(): Promise<User> {
    const user = new User({
      name: 'Test',
      email: 'test@test.com',
      password: 'encrypted_password',
    });

    await user.save();

    return user;
  }
}
