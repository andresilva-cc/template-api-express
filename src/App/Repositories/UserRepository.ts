import { Model } from 'sequelize-typescript';
import BaseRepository from './BaseRepository';
import { User } from '../Models';

export default class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  public async findByEmail(email: string): Promise<Model | null> {
    return this.model.findOne({
      where: {
        email,
      },
    });
  }

  public async emailExists(email: string): Promise<boolean> {
    const user = await this.model.findOne({
      where: {
        email,
      },
    });

    return user !== null;
  }
}
