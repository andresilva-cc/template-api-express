/* eslint-disable class-methods-use-this */

import { Model } from 'sequelize-typescript';
import ResourceNotFoundError from '../Errors/ResourceNotFoundError';

// TODO: Find a way to remove the @ts-ignore comments without getting any errors
export default abstract class BaseRepository<M extends Model> {
  constructor(protected model: typeof Model) {}

  public async all(attributes?: string[]): Promise<M[]> {
    // @ts-ignore
    return this.model.findAll({
      attributes,
    });
  }

  public async findById(id: number, attributes?: string[]): Promise<M> {
    // @ts-ignore
    const resource = await this.model.findByPk(id, {
      attributes,
    });

    if (resource) {
      // @ts-ignore
      return resource;
    }

    throw new ResourceNotFoundError();
  }

  public async create(data: any): Promise<M> {
    // @ts-ignore
    return this.model.create(data);
  }

  public async update(id: number, data: any): Promise<M> {
    const resource = await this.findById(id);

    if (resource) {
      // @ts-ignore
      return resource.update(data);
    }

    throw new ResourceNotFoundError();
  }

  public async delete(id: number): Promise<boolean> {
    const resource = await this.findById(id);

    if (resource) {
      // @ts-ignore
      await resource.destroy();
      return true;
    }

    throw new ResourceNotFoundError();
  }
}
