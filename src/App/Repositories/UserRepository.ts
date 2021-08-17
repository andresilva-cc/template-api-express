import BaseRepository from './BaseRepository';
import { User } from '../Models';

export default class UserRepository extends BaseRepository {
  constructor() {
    super(User);
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
