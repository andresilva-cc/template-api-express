import { userRepository } from '../Repositories';

export default class AuthService {
  public static async register(): Promise<object> {
    const user = await userRepository.create({
      name: 'Test',
      email: 'test@test.com',
      password: 'encrypted_password',
    });

    return user.toJSON();
  }
}
