import { isValidObjectId, Model } from 'mongoose';
import InvalidIdError from '../errors/invalidId.error';
import { Model as IGenericModel } from '../interfaces/ModelInterface';

export default abstract class GenericModel<T> implements IGenericModel<T> {
  protected _modelMongoose: Model<T>;

  constructor(modelMongoose: Model<T>) {
    this._modelMongoose = modelMongoose;
  }

  async create(obj: T): Promise<T> {
    const createdCar = await this._modelMongoose.create(obj);
    return createdCar;
  }

  async read(): Promise<T[]> {
    const allCars = await this._modelMongoose.find();
    return allCars;
  }

  // para checar o hexstring do Id, o mongoose disponibiliza a partir da versão 6.2.5 a função isValidObjectId()
  async readOne(id: string): Promise<T | null> {
    if (id.length < 24) {
      throw new InvalidIdError('Id must have 24 hexadecimal characters');
    }
    const car = await this._modelMongoose.findById(id);
    return car;
  }

  async update(id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    const updatedCar = await this._modelMongoose
      .findOneAndUpdate({ _id: id }, obj, { returnOriginal: false });
    return updatedCar;
  }

  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    const deleted = await this._modelMongoose.findByIdAndDelete(id);
    return deleted;
  }
}
