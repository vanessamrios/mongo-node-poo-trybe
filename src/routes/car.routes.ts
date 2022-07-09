import { Router } from 'express';
import CarController from '../controllers/car.controller';
import CarService from '../services/car.service';
import CarModel from '../models/car.model';
import carMongooseModel from '../models/schemas/car.schema';

const carRoutes = Router();

const carModel = new CarModel(carMongooseModel);
const carService = new CarService(carModel);
const carController = new CarController(carService);

carRoutes.post('/cars', (req, res, next) => 
  carController.create(req, res, next));

export default carRoutes;