import { Car } from '../../interfaces/CarInterface';

export default interface ICarService {
  create(obj: Car): Promise<Car>;
  read(): Promise<Car[]>;
  readOne(id: string): Promise<Car>;
  update(id: string, obj: Car): Promise<Car>;
  delete(id: string): Promise<Car> ;
}