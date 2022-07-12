import { Error as ValidationError } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import ICarService from '../services/interfaces/car.service';

export default class CarController {
  private _carSercvice: ICarService;

  constructor(carService: ICarService) {
    this._carSercvice = carService;
  }

  public async create(
    req: Request,
    res: Response,
  ): Promise<Response | void> {
    try {
      const { model, year, color, buyValue, seatsQty, doorsQty } = req.body;
      const carCreated = await this._carSercvice.create({
        model, year, color, buyValue, seatsQty, doorsQty,
      });
      return res.status(201).json(carCreated);
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message });
      }
    }
  }

  public async read(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const allCars = await this._carSercvice.read();
      return res.status(200).json(allCars);
    } catch (error) {
      next(error);
    }
  }

  public async readOne(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { id } = req.params;
      const car = await this._carSercvice.readOne(id);
      return res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  }

  public async update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      if (!req.body) { return res.status(400).json(); }
      const { id } = req.params;
      const { model, year, color, buyValue, seatsQty, doorsQty } = req.body;
      const updatedCar = await this._carSercvice.update(id, {
        model, year, color, buyValue, seatsQty, doorsQty });
      return res.status(200).json(updatedCar);
    } catch (error) {
      next(error);
    }
  }

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { id } = req.params;
      await this._carSercvice.delete(id);
      return res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}