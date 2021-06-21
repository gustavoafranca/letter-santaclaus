import {Request, Response} from 'express'
import { getRepository, ILike } from 'typeorm'
import Letter from '../models/Letter'
import LetterView from '../views/LetterView'
import LetterCustonView from '../views/LetterCustonView'


export default {
  async create(req: Request, res: Response){
    const letter = <Letter> req.body

    try {
      const repository = getRepository(Letter)
      const create = repository.create(letter)
      const save = await repository.save(create)

      return res.status(201).json(LetterView.render(save))
    } catch {
      return res.sendStatus(400)
    }
  },

  async update(req: Request, res: Response){
    const {id} = req.params
    const letter = <Letter> req.body

    try {
      const repository = getRepository(Letter)
      await repository.update(id, letter)
      const value = <Letter> await repository.findOne(id)

      return res.status(200).json(LetterView.render(value))
    } catch {
      return res.sendStatus(400)
    }
  },

  async delete(req: Request, res: Response){
    const {id} = req.params

    try {
      const repository = getRepository(Letter)
      await repository.delete(id)

      return res.sendStatus(204)
    } catch {
      return res.sendStatus(400)
    }
  },

  async index(req: Request, res: Response){
    try {
      const repository = getRepository(Letter)
      const letter = await repository.find()

      return res.status(200).json(LetterCustonView.renderMany(letter))
    } catch {
      return res.sendStatus(400)
    }
  },

  async indexFilter(req: Request, res: Response){
    const {uf} = req.params
    const {city} = req.body
    try {
      const repository = getRepository(Letter)
      const letter = await repository.find({where: {
        city: ILike(`%${city}%`),
        uf: ILike(uf)
      }})

      return res.status(200).json(LetterCustonView.renderMany(letter))
    } catch {
      return res.sendStatus(400)
    }
  },

  async show(req:Request, res: Response){
    const {id} = req.params
    try {
      const repository = getRepository(Letter)
      const letter = await repository.findOneOrFail(id)

      return res.status(200).json(LetterCustonView.render(letter))
    } catch {
      return res.sendStatus(400)
    }
  },
}