import { Model } from 'sequelize-typescript';
import BaseRepository from './BaseRepository';
import { User, UserActivation } from '../Models';

export default class UserActivationRepository extends BaseRepository {
  constructor() {
    super(UserActivation);
  }

  public async findByToken(token: string): Promise<Model | null> {
    return this.model.findOne({
      where: {
        token,
      },
      include: [
        User,
      ],
    });
  }
}
