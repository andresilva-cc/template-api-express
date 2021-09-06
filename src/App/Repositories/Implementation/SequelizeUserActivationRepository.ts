/* eslint-disable class-methods-use-this */

import SequelizeBaseRepository from './SequelizeBaseRepository';
import { User, UserActivation } from '../../Models';
import UserActivationRepository from '../UserActivationRepository';

export default class SequelizeUserActivationRepository
  extends SequelizeBaseRepository<UserActivation> implements UserActivationRepository {
  constructor() {
    super(UserActivation);
  }

  public async findByToken(token: string): Promise<UserActivation | null> {
    return UserActivation.findOne({
      where: {
        token,
      },
      include: [
        User,
      ],
    });
  }
}
