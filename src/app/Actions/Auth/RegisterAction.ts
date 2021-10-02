import { Action } from '../../../lib';
import { AuthService } from '../../Services';

class RegisterAction implements Action {
  constructor(
    private authService: AuthService,
  ) {}

  public async run(data: RegisterParams): Promise<any> {
    const user = await this.authService.register(data.name, data.email, data.password);
    const token = await this.authService.createUserActivation(user);
    this.authService.sendUserRegisteredMail(user, token);
  }
}

interface RegisterParams {
  name: string,
  email: string,
  password: string,
}

export default RegisterAction;
