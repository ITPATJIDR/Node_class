import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class Hasher {

   public async hash_Password (password: string): Promise<string> {
      return await bcrypt.hash(password,10)
   }

   public async compare_Password (password: string, hashPassword: string): Promise<boolean> {
      return await bcrypt.compare(password,hashPassword)
   }
}

export default Hasher
