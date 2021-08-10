import BaseRepository from './BaseRepository';
import User from '../Models/User';

export default class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }
}
