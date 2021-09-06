/* eslint-disable class-methods-use-this */

import SequelizeBaseRepository from './SequelizeBaseRepository';
import { User } from '../../Models';
import UserRepository from '../UserRepository';

class SequelizeUserRepository
  extends SequelizeBaseRepository<User> implements UserRepository {
  constructor() {
    super(User);
  }

  public async findByEmail(email: string): Promise<User | null> {
    return User.findOne({
      where: {
        email,
      },
    });
  }

  public async emailExists(email: string): Promise<boolean> {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    return user !== null;
  }
}

export default SequelizeUserRepository;
