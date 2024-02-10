import { Router, Request, Response } from 'express';
import AuthController from '../controllers/AuthController';

class AuthRouter {
  public router: Router;
  private controller: AuthController;

  constructor() {
    this.router = Router();
    this.controller = new AuthController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', (req: Request, res: Response) => {
      this.controller.register(req,res)
    });

    this.router.post('/login', (req: Request, res: Response) => {
      this.controller.login(req,res)
    });
  }
}

export default AuthRouter;
