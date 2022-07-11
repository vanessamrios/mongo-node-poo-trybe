import CustomError from './custom.error';

export default class NotFoundError extends CustomError {
  constructor(message: string) {
    super(message, 404);
  }
}
