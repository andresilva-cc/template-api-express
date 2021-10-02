import { AuthService } from '../../Services';
import { Action } from '../../../lib';

class LoginAction implements Action {
  constructor(
    private authService: AuthService,
  ) {}

  public async run(data: LoginParams): Promise<any> {
    return this.authService.login(data.email, data.password);
  }
}

interface LoginParams {
  email: string,
  password: string,
}

export default LoginAction;
