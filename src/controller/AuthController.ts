import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import { getRepository } from 'typeorm'
import User from '../models/User'

export default {
  async authenticate(req: Request, res: Response){
    const {username, password} = req.body
    
    try {
      const repository = getRepository(User)
      const user = await repository.findOne({where: {username}})

      if(!user){
        return res.sendStatus(401)
      }

      const isValidPassword = user.password

      if(isValidPassword !== password){
        return res.sendStatus(401)
      }

      const token = jwt.sign({userId: user.id}, `${process.env.AUTH_TOKEN}`, {expiresIn: '1d'})

      return res.status(201).json({
        username: user.username,
        token
      })
    } catch {
      return res.sendStatus(400)
    }
  }
}
