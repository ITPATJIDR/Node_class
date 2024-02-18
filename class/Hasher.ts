import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class Hasher {

   public async hashPassword (password: string): Promise<string> {
      return await bcrypt.hash(password,10)
   }

   public async comparePassword (password: string, hashPassword: string): Promise<boolean> {
      return await bcrypt.compare(password,hashPassword)
   }

   public generateSession (id: number): string {
      return ""
   }

   public verifySession (token: string): boolean {
      return true
   }

}

export default Hasher
