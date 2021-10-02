import { AccountNotActivatedError, EmailAlreadyInUseError, InvalidCredentialsError } from '../Errors';
import { PasswordFacade, TokenFacade } from '../Facades';
import { User } from '../Models';
import { UserRepository } from '../Repositories';

class AuthService {
  constructor(
    private userRepository: UserRepository,
  ) {}

  public async login(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError();
    }

    if (!user.active) {
      throw new AccountNotActivatedError();
    }

    const passwordMatches = PasswordFacade.compare(password, user.password);

    if (!passwordMatches) {
      throw new InvalidCredentialsError();
    }

    return AuthService.generateToken(user);
  }

  public async createUser(name: string, email: string, password: string): Promise<User> {
    if (await this.userRepository.emailExists(email)) {
      throw new EmailAlreadyInUseError();
    }

    return this.userRepository.create({
      name,
      email,
      password: PasswordFacade.hash(password),
    });
  }

  private static async generateToken(user: User): Promise<any> {
    const userData = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    const authData = {
      user: userData,
      token: await TokenFacade.sign(userData, {
        expiresIn: 60 * 60,
      }),

    };

    return authData;
  }
}

export default AuthService;
