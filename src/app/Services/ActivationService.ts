import { nanoid } from 'nanoid';
import { BadRequestError } from '../Errors';
import { MailFacade } from '../Facades';
import { UserActivatedMail, UserRegisteredMail } from '../Mail';
import { User } from '../Models';
import { UserActivationRepository, UserRepository } from '../Repositories';

class ActivationService {
  constructor(
    private userRepository: UserRepository,
    private userActivationRepository: UserActivationRepository,
    private mailService: MailFacade,
  ) {}

  public async createUserActivation(user: User): Promise<string> {
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

    return token;
  }

  public async activateUser(token: string): Promise<User> {
    const activation = await this.userActivationRepository.findByToken(token);

    if (!activation) {
      throw new BadRequestError();
    }

    await this.userRepository.update(activation.user.id, {
      active: true,
    });

    await this.userActivationRepository.delete(activation.userId);

    return activation.user;
  }

  public sendUserRegisteredMail(user: User, token: string) {
    this.mailService.send(new UserRegisteredMail(user.name, user.email, token).build());
  }

  public sendUserActivatedMail(user: User) {
    this.mailService.send(new UserActivatedMail(user.name, user.email).build());
  }
}

export default ActivationService;
