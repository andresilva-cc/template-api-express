export default interface BaseRepository {
  all(attributes?: string[]): Promise<any[]>;

  findById(id: number, attributes?: string[]): Promise<any>;

  create(data: any): Promise<any>;

  update(id: number, data: any): Promise<any>;

  delete(id: number): Promise<boolean>;
}
