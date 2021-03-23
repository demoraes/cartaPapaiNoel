import { Router } from 'express';

import Lettersrepository from '@modules/letters/infra/typeorm/repositories/LettersRepository';
import CreateLettersService from '@modules/letters/services/CreateLetterService';
import ReadLetterService from '@modules/letters/services/ReadLetterService';
import { ObjectId } from 'mongodb';
import UpdateLetterService from '@modules/letters/services/UpdateLetterService';
import DeleteLetterService from '@modules/letters/services/DeleteLetterService';

const lettersRouter = Router();

lettersRouter.get('/', async (request, response) => {
  const lettersrepository = new Lettersrepository();

  const letters = await lettersrepository.findAll();

  return response.json(letters);
});


lettersRouter.post('/', async (request, response) => {
  try {
    const { name, message } = request.body;

    const lettersrepository = new Lettersrepository();

    const createLetter = new CreateLettersService(lettersrepository);

    const letter = await createLetter.execute({ message, name });

    return response.json(letter);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});


lettersRouter.put('/:id/read', async (request, response) => {
  try {
    const id = new ObjectId(request.params.id);

    const lettersrepository = new Lettersrepository();

    const updateReadLetter = new ReadLetterService(lettersrepository);

    const letter = await updateReadLetter.execute(id);

    return response.json(letter);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});


lettersRouter.put('/:id', async (request, response) => {
  try {
    const id = new ObjectId(request.params.id);

    const { name, message } = request.body;

    const lettersrepository = new Lettersrepository();

    const updateLetter = new UpdateLetterService(lettersrepository);

    const letter = await updateLetter.execute({ message, name, id });

    return response.json(letter);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});


lettersRouter.delete('/:id', async (request, response) => {
  try {
    const id = new ObjectId(request.params.id);

    const lettersrepository = new Lettersrepository();

    const deleteLetter = new DeleteLetterService(lettersrepository);

    const letter = await deleteLetter.execute(id);

    return response.json(letter);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default lettersRouter;