import { expect } from 'chai';
import Sinon, { SinonStub } from 'sinon';
import CarModel from '../../../models/car.model';
import CarService from '../../../services/car.service';
import { Car } from '../../../interfaces/CarInterface';
import { Model as IGenericModel } from '../../../interfaces/ModelInterface';

const createMock = Sinon.spy();
const readMock = Sinon.spy();
const readOneMock = Sinon.spy();
const mockCarId = '62c760648ae2a532c6797ffc';

const modelMock = {
  create: createMock,
  read: readMock,
  readOne: readOneMock,
} as unknown as  IGenericModel<Car>;

const validCar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};
 
describe('Test the service layer', () => {
    describe('Test the endpoint post /cars in service', () => {
      it('Test if the create function was called', async () => {
        const carModel = new CarService(modelMock);
        await carModel.create(validCar);
        Sinon.assert.called(createMock)
      });
    });

    describe('Test the endpoint get /cars in service', () => {
      it('Test if the read function was called', async () => {
        const carModel = new CarService(modelMock);
        await carModel.read();
        Sinon.assert.called(readMock);
      });
    
      // it('Test if the readOne function was called', async () => {
      //   const carModel = new CarService(modelMock);
      //   await carModel.readOne(mockCarId);
      //   Sinon.assert.called(readOneMock);
      // });
    });
});

