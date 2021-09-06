import BaseRepository from './BaseRepository';

interface UserActivationRepository extends BaseRepository {
  findByToken(token: string): Promise<any | null>;
}

export default UserActivationRepository;
