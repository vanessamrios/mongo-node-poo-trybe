import ICarService from './interfaces/car.service';
import { Car } from '../interfaces/CarInterface';
import { Model as IGenericModel } from '../interfaces/ModelInterface';
import NotFoundError from '../errors/notFound.error';

const message = 'Object not found';

export default class CarService implements ICarService {
  private _carModel: IGenericModel<Car>;

  constructor(carModel: IGenericModel<Car>) {
    this._carModel = carModel;
  }
  
  async create(obj: Car): Promise<Car> {
    const created = await this._carModel.create(obj);
    return created;
  }

  async read(): Promise<Car[]> {
    const allCars = await this._carModel.read();
    return allCars;
  }

  async readOne(id: string): Promise<Car> {
    const car = await this._carModel.readOne(id);
    if (!car) throw new NotFoundError(message);
    return car;
  }

  async update(id: string, obj: Car): Promise<Car> {
    const updatedCar = await this._carModel.update(id, obj);
    if (!updatedCar) throw new NotFoundError(message);
    return updatedCar;
  }

  async delete(id: string): Promise<Car> {
    const deletedCar = await this._carModel.delete(id);
    if (!deletedCar) throw new Error(message);
    return deletedCar;
  }
}
