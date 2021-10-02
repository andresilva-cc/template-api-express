import DependencyContainer from './lib/DependencyContainer';
import { ActivateAction, LoginAction, RegisterAction } from './app/Actions/Auth';
import {
  SequelizeUserActivationRepository, SequelizeUserRepository,
} from './app/Repositories/Implementation';
import { AuthService, MailService } from './app/Services';

const container = new DependencyContainer();

// Repositories
container.register('UserRepository', new SequelizeUserRepository());
container.register('UserActivationRepository', new SequelizeUserActivationRepository());

// Services
container.register('MailService', new MailService());
container.register('AuthService', new AuthService(
  container.get('UserRepository'),
  container.get('UserActivationRepository'),
  container.get('MailService'),
));

// Actions
container.register('ActivateAction', new ActivateAction(
  container.get('AuthService'),
));
container.register('LoginAction', new LoginAction(
  container.get('AuthService'),
));
container.register('RegisterAction', new RegisterAction(
  container.get('AuthService'),
));

export default container;
