import { Error } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import InvalidIdError from '../errors/invalidId.error';
import NotFoundError from '../errors/notFound.error';

export default function errorMiddleware(
  err: unknown, 
  req: Request, 
  res: Response,
  _: NextFunction,
) {
  if (err instanceof InvalidIdError) {
    return res.status(400).json({ error: err.message });
  }
  if (err instanceof NotFoundError) {
    return res.status(404).json({ error: 'Object not found' });
  }
  if (err instanceof Error.ValidationError) {
    return res.status(400).json({ message: err.message });
  }
  return res.status(500).json({ message: 'internal error' });
}