import { Router } from 'express'

const routes = Router()

routes.get('/', (_req, _res) => {
  _res.send('welcome express')
})

export default routes