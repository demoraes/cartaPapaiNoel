import { Router } from 'express';

import UserRepository from '@modules/usuarios/infra/typeorm/repositories/UserRepository';
import AuthenticateUserService from '@modules/usuarios/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const userRepository = new UserRepository();
    const authenticateUser = new AuthenticateUserService(userRepository);

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    return response.json({ user: user, token });
  } catch (err) {

    console.log(request.user,'rota');
    return response.status(400).json({ error: err.message });
  }
});



export default sessionsRouter;
