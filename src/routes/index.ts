import { Router } from 'express'
import * as controllers from '../controllers/index';

const routes = Router()

routes.get('/', controllers.index)



export default routes