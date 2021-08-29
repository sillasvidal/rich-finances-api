import { accountsRouter } from '@modules/accounts/infra/http/routes/accounts.routes';
import { ensureAuthenticated } from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { sessionsRouter } from '@modules/users/infra/http/routes/sessions.routes';
import { usersRouter } from '@modules/users/infra/http/routes/users.routes';
import { Router } from 'express';

const router = Router();

router.use('/users', usersRouter);
router.use('/sessions', sessionsRouter);

router.use(ensureAuthenticated);
router.use('/accounts', accountsRouter);

export default router;
