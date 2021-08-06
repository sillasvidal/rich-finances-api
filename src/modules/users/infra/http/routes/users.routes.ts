import { Router } from 'express';

import { UsersController } from '../controllers/UsersController';
import { UserValidation } from '../validations/UserValidation';

export const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post(
  '/',
  UserValidation.validateCreateUser,
  usersController.createNewUser,
);
