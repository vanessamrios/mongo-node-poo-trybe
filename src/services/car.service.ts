import ICarService from './interfaces/car.service';
import { Car } from '../interfaces/CarInterface';
import { Model as IGenericModel } from '../interfaces/ModelInterface';

const message = 'car not found';

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
    if (!car) throw new Error(message);
    return car;
  }
  // criar middleware de erro

  async update(id: string, obj: Car): Promise<Car> {
    const updatedCar = await this._carModel.update(id, obj);
    if (!updatedCar) throw new Error(message);
    return updatedCar;
  }

  async delete(id: string): Promise<Car> {
    const deletedCar = await this._carModel.delete(id);
    if (!deletedCar) throw new Error(message);
    return deletedCar;
  }
}
