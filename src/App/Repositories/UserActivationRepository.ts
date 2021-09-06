import BaseRepository from './BaseRepository';

export default interface UserActivationRepository extends BaseRepository {
  findByToken(token: string): Promise<any | null>;
}
