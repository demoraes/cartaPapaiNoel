import { Router } from 'express';

import UserRepository from '@modules/usuarios/infra/typeorm/repositories/UserRepository';
import CreateUserService from '@modules/usuarios/services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const userRepository = new UserRepository();

    const createLetter = new CreateUserService(userRepository);

    const letter = await createLetter.execute({ name, email, password });

    return response.json(letter);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;