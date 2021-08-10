import UserRepository from '../Repositories/UserRepository';

export default class AuthService {
  public static async register(): Promise<object> {
    const userRepository = new UserRepository();
    const user = await userRepository.create({
      name: 'Test',
      email: 'test@test.com',
      password: 'encrypted_password',
    });

    return user.toJSON();
  }
}
