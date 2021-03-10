import { ObjectID } from 'mongodb';
import { getCustomRepository } from 'typeorm';

import Letter from '../models/Letter';
import LettersRepository from '../repositories/LettersRepository';


interface Request {
  name: string;
  message: string;
}

class CreateLetterService {
  public async execute({ message, name }: Request): Promise<Letter> {
    const lettersRepository = getCustomRepository(LettersRepository);

    const findNameExists = await lettersRepository.findByName(name);

    if (findNameExists) {
      throw Error('This name already exists');
    }

    const letter = lettersRepository.create({ name, message });

    await lettersRepository.save(letter);

    return letter;
  }
}

export default CreateLetterService;