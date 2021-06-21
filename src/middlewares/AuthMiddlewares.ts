import {Request, Response, NextFunction, response} from 'express'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()

interface TokenPlayload {
  userId: string;
  iat: number;
  exp: number
}

export default function Auth(req: Request, res: Response, next: NextFunction){
  const {authorization} = req.headers;

  if (!authorization){
    return response.sendStatus(401)
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, `${process.env.AUTH_TOKEN}`)
    
    const {userId} = <TokenPlayload> data;
    req.userId = userId;

    return next()
    
  } catch {
    return res.sendStatus(401)
  }
}