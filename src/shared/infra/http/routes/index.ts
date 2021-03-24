import { Router } from 'express';
import lettersRouter from '@modules/letters/infra/http/routes/letters.routes';
import usersRouter from '@modules/usuarios/infra/http/routes/user.routes';
import sessionsRouter from '@modules/usuarios/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/letters', lettersRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;