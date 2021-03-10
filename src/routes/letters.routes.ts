import { Router } from 'express';

import LettersRepository from '../repositories/LettersRepository';
import CreateLettersService from '../services/CreateLetterService';

const lettersRouter = Router();
const lettersRepository = new LettersRepository();

lettersRouter.get('/', (request, response) => {
  const letters = lettersRepository.all();

  return response.json(letters);
});


lettersRouter.post('/', (request, response) => {
  try {
    const { name, message } = request.body;

    const createLetter = new CreateLettersService(lettersRepository);

    const letter = createLetter.execute({ message, name });

    return response.json(letter);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default lettersRouter;