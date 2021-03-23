import Letter from '@modules/letters/infra/typeorm/models/Letter';
import { ObjectID } from 'mongodb';
import ILettersRepository from '../repositories/ILettersRepository';

class ReadLetterService {
  constructor(private lettersRepository: ILettersRepository) { }

  public async execute(id: ObjectID): Promise<Letter | undefined> {
    const letter = await this.lettersRepository.findById(id);

    if (!letter) {
      throw Error('This letter already exists');
    }

    letter.read = true;

    return this.lettersRepository.save(letter);
  }
}

export default ReadLetterService;