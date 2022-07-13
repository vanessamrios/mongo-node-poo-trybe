import Sinon from 'sinon';
import { expect } from 'chai';
import CarController from '../../../controllers/car.controller';
import { Request, Response, NextFunction } from 'express';
import ICarService from '../../../services/interfaces/car.service';

const validCar = {
    model: 'Uno da Escada',
    year: 1963,
    color: 'red',
    buyValue: 3500,
    seatsQty: 2,
    doorsQty: 2
  };

const createMock = Sinon.stub().resolves(validCar);
const readMock = Sinon.stub().resolves([validCar]);
const readOneMock = Sinon.spy();
const mockCarId = '62c760648ae2a532c6797ffc';

const serviceMock = {
  create: createMock,
  read: readMock,
  readOne: readOneMock,
} as unknown as  ICarService;

const reqMock = {} as Request;
const resMock = {} as Response;
const nextMock = () => ({}) as NextFunction;
 
describe('Test the controller layer', () => {
    describe('Test the endpoint post /cars in controller', () => {
        before(() => {
            resMock.status = Sinon.stub().returns(resMock);
            resMock.json = Sinon.stub().returns(resMock);
        })
      it('Test if the create is called', async () => {
        const carController = new CarController(serviceMock);
        reqMock.body = validCar;
        await carController.create(reqMock, resMock);
        expect((resMock.status as sinon.SinonStub).calledWith(201)).to.be.true;
        expect((resMock.json as sinon.SinonStub).calledWith(validCar)).to.be.true;
      });
      it('Test if the read is called', async () => {
        const carController = new CarController(serviceMock);
        await carController.read(reqMock, resMock, nextMock);
        expect((resMock.status as sinon.SinonStub).calledWith(200)).to.be.true;
        expect((resMock.json as sinon.SinonStub).calledWith([validCar])).to.be.true;
      });
    });

    // describe('Test the endpoint get /cars in service', () => {
    //   it('Test if the read function was called', async () => {
    //     const carModel = new CarController(serviceMock);
    //     await carModel.read();
    //     Sinon.assert.called(readMock);
    //   });
    
      // it('Test if the readOne function was called', async () => {
      //   const carModel = new CarService(modelMock);
      //   await carModel.readOne(mockCarId);
      //   Sinon.assert.called(readOneMock);
      // });
    // });
});

