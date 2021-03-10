import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import LettersRepository from '../repositories/LettersRepository';
import CreateLettersService from '../services/CreateLetterService';

const lettersRouter = Router();
//const lettersRepository = new LettersRepository();

lettersRouter.get('/', async (request, response) => {
  const lettersRepository = getCustomRepository(LettersRepository);
  const letters = await lettersRepository.find();

  return response.json(letters);
});


lettersRouter.post('/', async (request, response) => {
  try {
    const { name, message } = request.body;

    const createLetter = new CreateLettersService();

    const letter = await createLetter.execute({ message, name });

    return response.json(letter);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default lettersRouter;