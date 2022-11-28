import path from 'path'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import paginate from 'express-paginate'
import httpErrors from 'http-errors'
import errorHandle from './middlewares/error-handle'

/* routes */
import indexRouter from './routes'
import authenticationRouter from './routes/authentication'

const app = express()

app.use((_req, res, next) => {
  res.removeHeader('X-Powered-By')
  next()
})
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(paginate.middleware(10, 50))

app.use('/api', indexRouter)
app.use('/api/provider', authenticationRouter)

app.use((_req, _res, next) => {
  next(httpErrors(404))
})
app.use(errorHandle)

export default app
