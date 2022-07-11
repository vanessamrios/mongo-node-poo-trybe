import CustomError from './custom.error';

export default class InvalidIdError extends CustomError {
  constructor(message: string) {
    super(message, 400);
  }
}
