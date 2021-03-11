import { Router } from 'express';
import { getMongoRepository } from 'typeorm';

import CreateLettersService from '../services/CreateLetterService';
import UpdateLetterService from '../services/UpdateLetterService';
import DeleteLetterService from '../services/DeleteLetterService';
import Letter from '../models/Letter';

const lettersRouter = Router();

lettersRouter.get('/', async (request, response) => {
  const lettersRepository = getMongoRepository(Letter);
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


lettersRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const { name, message } = request.body;

    const updateLetter = new UpdateLetterService();

    const letter = await updateLetter.execute({ message, name, id });

    return response.json(letter);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});


lettersRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const deleteLetter = new DeleteLetterService();

    const letter = await deleteLetter.execute({ id });

    return response.json(letter);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default lettersRouter;