import { Router } from 'express';

import LettersRepository from '../repositories/LettersRepository';

const lettersRouter = Router();
const lettersRepository = new LettersRepository();


lettersRouter.post('/', (request, response) => {
  const { name, message } = request.body;

  const findNameExists = lettersRepository.findByName(name);

  if (findNameExists) {
    return response.status(400).json({ message: 'This name already exists' });
  }

  const letter = lettersRepository.create(name, message);

  return response.json(letter);
});

export default lettersRouter;