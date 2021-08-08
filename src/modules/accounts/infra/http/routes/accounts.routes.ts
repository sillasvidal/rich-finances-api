import { Router } from 'express';

import { AccountsController } from '../controllers/AccountsController';
import { AccountValidation } from '../middlewares/AccountValidation';

export const accountsRouter = Router();
const accountsController = new AccountsController();

accountsRouter.post(
  '/',
  AccountValidation.validateCreateAccount,
  accountsController.create,
);
