/* eslint-disable class-methods-use-this */

import BaseRepository from './BaseRepository';
import { User } from '../Models';

export default class UserRepository extends BaseRepository<User> {
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
