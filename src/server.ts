import express from 'express'
import 'reflect-metadata'
import './database/connection';
import routes from './routes'

const app = express()
const PORT = 3333


app.use(express.json())

app.use(routes)

app.listen(PORT, () => {
  console.log(`Executando na porta ${PORT}`)
})