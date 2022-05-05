import express, { Request, Response } from 'express'
import { dashboardQuery } from '../models/homePage'
import { verifyAuthToken } from '../middlewares/verifyAuthTokenMIDD'

const store = new dashboardQuery()

const homeRoute = (app: express.Application) => {
  app.get('/home', verifyAuthToken, index)
}

const index = async (_req: Request, res: Response) => {
  const orders = await store.index()
  res.json(orders)
}

export default homeRoute
