import { Router } from 'express';
import { uuid } from 'uuidv4';
import Letter from '../models/Letter';

const lettersRouter = Router();

const letters: Letter[] = [];

lettersRouter.post('/', (request, response) => {
  const { name, message } = request.body;

  const findNameExists = letters.find(letter =>
    letter.name === name
  );

  if (findNameExists) {
    return response.status(400).json({ message: 'This name already exists' });
  }

  const letter = new Letter(name, message);

  letters.push(letter);

  return response.json(letter);
});

export default lettersRouter;