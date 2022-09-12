import { Action } from '../../../lib';
import { ActivationService, AuthService } from '../../Services';

class RegisterAction implements Action {
  constructor(
    private activationService: ActivationService,
    private authService: AuthService,
  ) {}

  public async run(data: RegisterParams): Promise<any> {
    const user = await this.authService.createUser(data.name, data.email, data.password);
    const token = await this.activationService.createUserActivation(user);
    this.activationService.sendUserRegisteredMail(user, token);
  }
}

interface RegisterParams {
  name: string,
  email: string,
  password: string,
}

export { RegisterAction };
