/* eslint-disable class-methods-use-this */

import BaseRepository from './BaseRepository';
import { User, UserActivation } from '../Models';

export default class UserActivationRepository extends BaseRepository<UserActivation> {
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
