import { Container } from 'injektion';
import {
  SequelizeUserActivationRepository, SequelizeUserRepository,
} from './app/Repositories/Implementation';

const container = new Container({
  autoloadBaseDir: './src/app',
});

container.bind('UserRepository', SequelizeUserRepository);
container.bind('UserActivationRepository', SequelizeUserActivationRepository);

export default container;
