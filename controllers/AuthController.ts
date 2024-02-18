import { Request, Response } from 'express';

class AuthController {
  private username: string
  private password: string

  constructor(username: string, password: string) { 
    this.username = username
    this.password = password
  }

}

export default AuthController;

