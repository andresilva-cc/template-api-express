import DependencyContainer from './lib/DependencyContainer';
import {
  SequelizeUserActivationRepository, SequelizeUserRepository,
} from './App/Repositories/Implementation';
import { AuthService, MailService } from './App/Services';

const container = new DependencyContainer();

container.register('UserRepository', new SequelizeUserRepository());
container.register('UserActivationRepository', new SequelizeUserActivationRepository());
container.register('AuthService', new AuthService(
  container.get('UserRepository'),
  container.get('UserActivationRepository'),
  container.get('MailRepository'),
));
container.register('MailService', new MailService());

export default container;
