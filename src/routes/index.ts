import * as Routes from 'express'
import authentication from './authentication'

const initiation = Routes.Router()

initiation.use(
  '/',
  initiation.get('/', (_req, res) => {
    res.send('welcome express')
  }),
)
initiation.use('/api/authentication', authentication)

export default initiation
