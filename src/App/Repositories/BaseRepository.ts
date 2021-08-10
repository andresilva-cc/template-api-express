import { Model, ModelCtor } from 'sequelize-typescript';
import ResourceNotFoundError from '../Errors/ResourceNotFoundError';

// TODO: Use generics so that a child class return the correct Model type
export default abstract class BaseRepository {
  protected model: ModelCtor;

  constructor(model: ModelCtor) {
    this.model = model;
  }

  public async all(): Promise<Model[]> {
    return this.model.findAll();
  }

  public async findById(id: number): Promise<Model> {
    const resource = await this.model.findByPk(id);

    if (resource) {
      return resource;
    }

    throw new ResourceNotFoundError();
  }

  public async create(data: any): Promise<Model> {
    return this.model.create(data);
  }

  public async update(id: number, data: any): Promise<Model> {
    const resource = await this.findById(id);

    if (resource) {
      return resource.update(data);
    }

    throw new ResourceNotFoundError();
  }

  public async delete(id: number): Promise<boolean> {
    const resource = await this.findById(id);

    if (resource) {
      await resource.destroy();
      return true;
    }

    throw new ResourceNotFoundError();
  }
}
