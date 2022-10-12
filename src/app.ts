import path from 'path'
import bodyParser from 'body-parser'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import paginate from 'express-paginate'

/** port server */
import index from './routes'

const app = express()

app.use(helmet())
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(paginate.middleware(10, 50))

/** routes */

app.use('/', index)

export default app
