import DependencyContainer from './lib/DependencyContainer';
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

export default container;
