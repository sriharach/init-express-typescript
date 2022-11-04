import Routes from 'express'
import controllers from '../controllers'

const routes = Routes.Router()

routes.post('/login', controllers.authentication.Login)

export default routes
