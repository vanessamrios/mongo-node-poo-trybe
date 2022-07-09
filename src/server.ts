import carRoutes from './routes/car.routes';
import App from './app';

const server = new App();

server.addRouter(carRoutes);

export default server;
