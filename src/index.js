import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import route from './routes'

dotenv.config()

mongoose.connect(process.env.DATABASE_CONNECTION)

const { PORT } = process.env

const app = express()

app.use(express.json())
app.use(cors())

app.use(route)

app.listen(PORT, () => {
  console.log(`API Running on PORT: ${PORT}`)
})
