import { expect } from 'chai';
import  { Model } from 'mongoose';
import Sinon, { SinonStub } from 'sinon';
import CarModel from '../../../models/car.model';
import { Car } from '../../../interfaces/CarInterface';

const createMock = Sinon.spy();
const findMock = Sinon.spy();
const findByIdMock = Sinon.spy();
const mockCarId = '62c760648ae2a532c6797ffc';

const modelMock = {
  create: createMock,
  find: findMock,
  findById: findByIdMock,
} as unknown as Model<Car>;

const validCar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};
 
describe('Test the model layer', () => {
    describe('Test the endpoint post /cars in model', () => {
      it('Test if the create function was called', async () => {
        const carModel = new CarModel(modelMock);
        await carModel.create(validCar);
        Sinon.assert.called(createMock)
      });
    });

    describe('Test the endpoint get /cars in model', () => {
      it('Test if the read function was called', async () => {
        const carModel = new CarModel(modelMock);
        await carModel.read();
        Sinon.assert.called(findMock);
      });
    
      it('Test if the readOne function was called', async () => {
        const carModel = new CarModel(modelMock);
        await carModel.readOne(mockCarId);
        Sinon.assert.called(findByIdMock);
      });
    });
});

