import { Model } from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import GenericModel from './generic.model';

export default class CarModel extends GenericModel<Car> {
  constructor(private modelCar: Model<Car>) {
    super(modelCar);
  }
}
