import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import userRoutes from './handlers/user'
import productRoutes from './handlers/product'
import orderRoutes from './handlers/order'
import homeRoute from './handlers/homePage'
import morgan from 'morgan'
import AWS from 'aws-sdk'
// import { Sequelize, Model, DataTypes } from 'sequelize'
//
// const sequelize = new Sequelize(
//   'postgres://postgres:postgres@postgres.ckry9talr84o.us-east-1.rds.amazonaws.com:5432/postgres'
// )
// https://sequelize.org/docs/v6/getting-started/
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
// Testing the connection
// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

const app: express.Application = express()
const address = '0.0.0.0:8080'

const corsOptions = {
  origin: 'http://storefront-front.s3-website-us-east-1.amazonaws.com',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.use(morgan('dev'))

// use aws-sdk in express app
AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'AKIAXALHREMKOUMMQCEZ',
  secretAccessKey: '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',
})

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World!')
})

orderRoutes(app)
productRoutes(app)
userRoutes(app)
homeRoute(app)

app.listen(8080, function () {
  console.log(`starting app on: ${address}`)
})

export default app
