import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/user/user.router'
import { router } from './app/routes'
import { envCon } from './app/config'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'

const app =express()

app.use(express.json())
app.use(cors())

app.use("/api/v1",router)

app.get('/',(res:Response,req:Request) =>{
    res.send("Welcome To Ph Tour System")
})


app.use(globalErrorHandler)

app.use(notFound)
export default app
