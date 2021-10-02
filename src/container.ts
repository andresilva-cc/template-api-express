import { AuthController } from './app/Controllers';
import DependencyContainer from './lib/DependencyContainer';
import { ActivateAction, LoginAction, RegisterAction } from './app/Actions/Auth';
import { MailFacade } from './app/Facades';
import {
  SequelizeUserActivationRepository, SequelizeUserRepository,
} from './app/Repositories/Implementation';
import { ActivationService, AuthService } from './app/Services';

const container = new DependencyContainer();

// Facades
container.register('MailFacade', new MailFacade());

// Repositories
container.register('UserRepository', new SequelizeUserRepository());
container.register('UserActivationRepository', new SequelizeUserActivationRepository());

// Services
container.register('ActivationService', new ActivationService(
  container.get('UserRepository'),
  container.get('UserActivationRepository'),
  container.get('MailFacade'),
));
container.register('AuthService', new AuthService(
  container.get('UserRepository'),
));

// Actions
container.register('ActivateAction', new ActivateAction(
  container.get('ActivationService'),
));
container.register('LoginAction', new LoginAction(
  container.get('AuthService'),
));
container.register('RegisterAction', new RegisterAction(
  container.get('ActivationService'),
  container.get('AuthService'),
));

// Controllers
container.register('AuthController', new AuthController(
  container.get('ActivateAction'),
  container.get('LoginAction'),
  container.get('RegisterAction'),
));

export default container;
