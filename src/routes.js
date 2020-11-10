import { Router } from 'express'
import usersController from './controllers/usersController'

const route = new Router()

route.get('/', usersController.getAll)
route.put('/update/:id', usersController.updateUser)
route.post('/register', usersController.createUser)
route.delete('/del/:id', usersController.deleteUser)

export default route
