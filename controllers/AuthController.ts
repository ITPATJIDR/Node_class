import { Request, Response } from 'express';
import _ from "lodash"
import prisma from "../utils/database"
import Hasher from '../utils/hasher';

class AuthController {

  private hasher: Hasher

  constructor() {
    this.hasher = new Hasher()
  }

  public async register (req: Request, res: Response): Promise<void> {

    const { username , password } = req.body

    try{
      const checkUserExists = await prisma.user.findUnique({
        where: {
          username: username
        }
      })

      if(_.isNull(checkUserExists)){
        const hashedPassword = await this.hasher.hash_Password(password)
        const newUser = await prisma.user.create({
          data:{
            username : username,
            password: hashedPassword
          }
        })

        if(!_.isEmpty(newUser)){
          res.status(200).json({message:"Register Success", status:200})
        }else{
          res.status(200).json({message:"Register Failed", status:400})
        }
      }else{
        res.status(200).json({message:"Username is already Exist", status:400})
      }
    }catch(err) {
      res.status(200).json({message:"Internal Server Error", status:500})
    }

  }

  public async login (req: Request, res: Response): Promise<void> {

    const { username , password } = req.body

    try{
      res.status(200).json({message:"Login Success", status:200})
    }catch(err) {
      console.log(err)
      res.status(200).json({message:"Internal Server Error", status:500})
    }
  }
}

export default AuthController;

