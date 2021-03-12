import { getMongoRepository } from 'typeorm';

import Letter from '@modules/letters/infra/typeorm/models/Letter';
import LettersRepository from '../infra/typeorm/repositories/LettersRepository';

interface Request {
  name: string;
  message: string;
}

class CreateLetterService  {
  public async execute({ message, name }: Request): Promise<Letter> {
    const lettersRepository = getMongoRepository(LettersRepository);

    const findNameExists = await lettersRepository.findOne({ name });

    if (findNameExists) {
      throw Error('This name already exists');
    }

    const letter = await lettersRepository.create({});


    return letter;
  }
}

export default CreateLetterService;