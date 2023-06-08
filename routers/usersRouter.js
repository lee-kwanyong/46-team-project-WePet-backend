import { Router } from 'express'

import { loginRequired } from '../utils/auth.js';
import { userController } from '../controllers/index.js'

const usersRouter = Router()

usersRouter.post('/signup', userController.signUp);
usersRouter.post('/login', userController.login);
usersRouter.post('/address', loginRequired, userController.updateAddress);
usersRouter.patch('/information', userController.updateUser);
usersRouter.delete('', loginRequired, userController.deleteUser);

export { usersRouter }
