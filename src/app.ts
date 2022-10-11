import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import paginate from 'express-paginate'
import path from 'path'

dotenv.config()

const app = express()

app.use(helmet())
app.use(cors())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(paginate.middleware(10, 50))

/** routes */
import index from './routes';

app.use('/', index)


/** port server */

const port = process.env.PORT

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
