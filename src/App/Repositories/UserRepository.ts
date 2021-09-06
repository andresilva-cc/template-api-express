import BaseRepository from './BaseRepository';

export default interface UserRepository extends BaseRepository {
  findByEmail(email: string): Promise<any | null>;

  emailExists(email: string): Promise<boolean>;
}
