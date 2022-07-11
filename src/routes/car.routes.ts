import { Router } from 'express';
import CarController from '../controllers/car.controller';
import CarService from '../services/car.service';
import CarModel from '../models/car.model';
import carMongooseModel from '../models/schemas/car.schema';

const carRoutes = Router();

const carModel = new CarModel(carMongooseModel);
const carService = new CarService(carModel);
const carController = new CarController(carService);

carRoutes.post('/cars', (req, res) => carController.create(req, res));
carRoutes.get('/cars', (req, res, next) => carController.read(req, res, next));
carRoutes.get('/cars/:id', (req, res) => carController.readOne(req, res));

export default carRoutes;