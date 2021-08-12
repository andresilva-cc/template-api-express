import BaseRepository from './BaseRepository';
import { User } from '../Models';

export default class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }
}
