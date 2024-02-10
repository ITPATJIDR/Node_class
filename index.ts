import express, { Application } from 'express';
import bodyParser from 'body-parser';
import AuthRouter from './routes/AuthRouter';

class Server {
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = process.env.PORT ? parseInt(process.env.PORT) : 5000;

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    const authRouter = new AuthRouter();
    this.app.use('/auth', authRouter.router);
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();

