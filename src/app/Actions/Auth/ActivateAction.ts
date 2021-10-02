import { Action } from '../../../lib';
import { AuthService } from '../../Services';

class ActivateAction implements Action {
  constructor(
    private authService: AuthService,
  ) {}

  public async run(data: ActivateParams): Promise<any> {
    const user = await this.authService.activate(data.token);
    this.authService.sendUserActivatedMail(user);
  }
}

interface ActivateParams {
  token: string,
}

export default ActivateAction;
