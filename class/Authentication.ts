import { User } from "../types/userType"

class AuthController {
  private username: string
  private password: string

  constructor(username: string, password: string) { 
    this.username = username
    this.password = password
  }

  public login (username: string, password: string): User | null {
    return null
  }

  public register (username: string, password: string): void {
    return 
  }

  public logout (): boolean {
    return true
  }

}

export default AuthController;