import { BaseRepository } from './BaseRepository';

interface UserRepository extends BaseRepository {
  findByEmail(email: string): Promise<any | null>;

  emailExists(email: string): Promise<boolean>;
}

export { UserRepository };
