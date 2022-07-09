import { Request, Response, NextFunction } from 'express';

export default interface ICarController {
  create(req: Request, res: Response, next: NextFunction): Promise<Response>;
  read(req: Request, res: Response, next: NextFunction): Promise<Response>;
  readOne(req: Request, res: Response, next: NextFunction): Promise<Response>;
  update(req: Request, res: Response, next: NextFunction): Promise<Response>;
  delete(req: Request, res: Response, next: NextFunction): Promise<Response>;
}
