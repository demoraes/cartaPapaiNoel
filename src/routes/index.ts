import { Router } from 'express';
import lettersRouter from './letters.routes';

const routes = Router();

routes.use('/letters', lettersRouter);

export default routes;