import { Schema, model } from 'mongoose';
import { Car } from '../../interfaces/CarInterface';
 
// model: string; pelo menos, 3 caracteres
// year: number; Deve ser maior ou igual a 1900, porém menor ou igual a 2022
// color: string; Deve ser uma string com, pelo menos, 3 caracteres
// status?: boolean; Deve receber valores booleanos e deve ser opcional
// buyValue: number; Deve receber apenas números inteiros
// doorsQty: number; Deve ser maior ou igual a 2 e menor ou igual a 4
//   seatsQty: number; Deve ser maior ou igual a 2 e menor ou igual a 7

const carSchema = new Schema<Car>({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    min: [1900, 'O ano de fabricação do veículo deve ser entre 1900 e 2022'],
    max: [2022, 'O ano de fabricação do veículo deve ser entre 1900 e 2022'],
  },
  color: {
    type: String,
    required: true,
    minlength: 3,
  },
  status: {
    type: Boolean,
    required: false,
  },
  buyValue: {
    type: Number,
    required: true,
  },
  doorsQty: {
    type: Number,
    required: true,
    min: 2,
    max: 4,
  },
  seatsQty: {
    type: Number,
    required: true,
    min: 2,
    max: 7,
  },
}, { versionKey: false });

const carMongooseModel = model<Car>('cars', carSchema);

export default carMongooseModel;
