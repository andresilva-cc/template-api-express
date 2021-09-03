/* eslint-disable class-methods-use-this */

import ResourceNotFoundError from '../Errors/ResourceNotFoundError';

// TODO: Find a way to light up IntelliSense with the generic Model type and also to avoid the error
// TODO: 'Model' only refers to a type, but is being used as a value here.'
export default abstract class BaseRepository<Model> {
  public async all(attributes?: string[]): Promise<Model[]> {
    // @ts-ignore
    return Model.findAll({
      attributes,
    });
  }

  public async findById(id: number, attributes?: string[]): Promise<Model> {
    // @ts-ignore
    const resource = await Model.findByPk(id, {
      attributes,
    });

    if (resource) {
      return resource;
    }

    throw new ResourceNotFoundError();
  }

  public async create(data: any): Promise<Model> {
    // @ts-ignore
    return Model.create(data);
  }

  public async update(id: number, data: any): Promise<Model> {
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
