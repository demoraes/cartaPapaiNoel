import { Router } from 'express';
import lettersRouter from '@modules/letters/infra/http/routes/letters.routes';

const routes = Router();

routes.use('/letters', lettersRouter);

export default routes;