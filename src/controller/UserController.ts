import {Request, Response} from 'express'
import { getRepository } from 'typeorm'
import User from '../models/User'
import UserView from '../views/UserView'

export default {
  async create(req: Request, res: Response){
    const user = <User> req.body

    try {
      const repository = getRepository(User)
      const create = repository.create(user)
      const save = await repository.save(create)

      return res.status(201).json(save)
    } catch {
      return res.sendStatus(400)
    }
  },

  async update(req: Request, res: Response){
    const {id} = req.params
    const user = <User> req.body

    try {
      const repository = getRepository(User)
      await repository.update(id, user)
      const value = <User> await repository.findOne(id)

      return res.status(200).json(UserView.render(value))
    } catch {
      return res.sendStatus(400)
    }
  },

  async delete(req: Request, res: Response){
    const {id} = req.params

    try {
      const repository = getRepository(User)
      await repository.delete(id)

      return res.sendStatus(204)
    } catch {
      return res.sendStatus(400)
    }
  },

  async index(req: Request, res: Response){
    try {
      const repository = getRepository(User)
      const user = await repository.find()

      return res.status(200).json(UserView.renderMany(user))
    } catch {
      return res.sendStatus(400)
    }
  },

  async show(req:Request, res: Response){
    const {id} = req.params
    try {
      const repository = getRepository(User)
      const user = await repository.findOneOrFail(id)

      return res.status(200).json(UserView.render(user))
    } catch {
      return res.sendStatus(400)
    }
  },
}