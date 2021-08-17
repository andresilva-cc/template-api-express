import { EmailAlreadyInUseError } from '../Errors';
import { PasswordFacade } from '../Facades';
import { userRepository } from '../Repositories';

export default class AuthService {
  public static async register(name: string, email: string, password: string): Promise<void> {
    if (await userRepository.emailExists(email)) {
      throw new EmailAlreadyInUseError();
    }

    await userRepository.create({
      name,
      email,
      password: PasswordFacade.hash(password),
    });
  }
}
