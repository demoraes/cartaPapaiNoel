import { getMongoRepository } from 'typeorm';

import Letter from '../models/Letter';


interface Request {
  name: string;
  message: string;
}

class CreateLetterService {
  public async execute({ message, name }: Request): Promise<Letter> {
    const lettersRepository = getMongoRepository(Letter);

    const findNameExists = await lettersRepository.findOne({ name });

    if (findNameExists) {
      throw Error('This name already exists');
    }

    const letter = lettersRepository.create({ name, message });

    await lettersRepository.save(letter);

    return letter;
  }
}

export default CreateLetterService;