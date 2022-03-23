import { Container } from 'injektion';
import {
  SequelizeUserActivationRepository, SequelizeUserRepository,
} from '../app/Repositories/Implementation';

export default () => {
  const container = Container.getInstance();

  container.bind('UserRepository', SequelizeUserRepository);
  container.bind('UserActivationRepository', SequelizeUserActivationRepository);
};
