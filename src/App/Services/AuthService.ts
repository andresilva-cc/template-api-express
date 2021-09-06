import { nanoid } from 'nanoid';
import MailService from './MailService';
import { BadRequestError, EmailAlreadyInUseError } from '../Errors';
import { PasswordFacade } from '../Facades';
import { UserActivatedMail, UserRegisteredMail } from '../Mail';
import { User } from '../Models';
import { UserActivationRepository, UserRepository } from '../Repositories';

export default class AuthService {
  constructor(
    private userRepository: UserRepository,
    private userActivationRepository: UserActivationRepository,
    private mailService: MailService,
  ) {}

  public async register(name: string, email: string, password: string): Promise<void> {
    if (await this.userRepository.emailExists(email)) {
      throw new EmailAlreadyInUseError();
    }

    const user = await this.userRepository.create({
      name,
      email,
      password: PasswordFacade.hash(password),
    });

    this.createUserActivation(user);
  }

  public async activate(token: string): Promise<void> {
    const activation = await this.userActivationRepository.findByToken(token);

    if (!activation) {
      throw new BadRequestError();
    }

    await this.userRepository.update(activation.user.id, {
      active: true,
    });

    await this.userActivationRepository.delete(activation.userId);

    this.sendUserActivatedMail(activation.user as User);
  }

  private async createUserActivation(user: User): Promise<void> {
    let token;
    let activationExists;

    // TODO: Find a better way to do this without await in loop
    do {
      token = nanoid(21);
      // eslint-disable-next-line no-await-in-loop
      activationExists = await this.userActivationRepository.findByToken(token);
    } while (activationExists);

    await this.userActivationRepository.create({
      userId: user.id,
      token,
    });

    this.sendUserRegisteredMail(user, token);
  }

  private sendUserRegisteredMail(user: User, token: string) {
    this.mailService.send(new UserRegisteredMail(user.name, user.email, token).build());
  }

  private sendUserActivatedMail(user: User) {
    this.mailService.send(new UserActivatedMail(user.name, user.email).build());
  }
}
