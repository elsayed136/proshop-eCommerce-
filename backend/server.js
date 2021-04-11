import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import { errorHandler, notFound } from './middlewares/errorMiddlewares.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

// body-parser
app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)

// Error Handler Middlewares
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server is running on http://localhost:${PORT}`.yellow.bold)
)
