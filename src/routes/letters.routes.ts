import { Router } from 'express';
import { uuid } from 'uuidv4';

const lettersRouter = Router();

const letters = [];

lettersRouter.post('/', (request, response) => {
  const { name, message } = request.body;

  const letter = {
    id: uuid(),
    name,
    message,
  };

  letters.push(letter);

  return response.json(letter);
});

export default lettersRouter;