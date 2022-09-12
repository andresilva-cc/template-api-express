import { Action } from '../../../lib';
import { ActivationService } from '../../Services';

class ActivateAction implements Action {
  constructor(
    private activationService: ActivationService,
  ) {}

  public async run(data: ActivateParams): Promise<any> {
    const user = await this.activationService.activateUser(data.token);
    this.activationService.sendUserActivatedMail(user);
  }
}

interface ActivateParams {
  token: string,
}

export { ActivateAction };
