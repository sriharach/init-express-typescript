import path from 'path'
import bodyParser from 'body-parser'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import paginate from 'express-paginate'
import httpErrors from 'http-errors'
import errorHandle from './middlewares/error-handle'
import routes from './routes'
import setting from './setting'

const app = express()

/* set global */
global.__basedir = __dirname
global.__dirimage = setting.settingPath.__FILEPATH_IMAGE as string

app.use((_req, res, next) => {
  res.removeHeader('X-Powered-By')
  next()
})
app.use(helmet())
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(paginate.middleware(10, 50))
app.use(routes)
app.use((_req, _res, next) => {
  next(httpErrors(404))
})
app.use(errorHandle)

export default app
