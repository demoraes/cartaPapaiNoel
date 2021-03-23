import Letter from '@modules/letters/infra/typeorm/models/Letter';
import { ObjectID } from 'mongodb';
import ILettersRepository from '../repositories/ILettersRepository';

interface IRequest {
  id: ObjectID;
  name: string;
  message: string;
}


class UpdateLetterService {

  constructor(private lettersRepository: ILettersRepository) { }

  public async execute({ message, name, id }: IRequest): Promise<Letter> {
    const letter = await this.lettersRepository.findById(id);

    if (!letter) {
      throw Error('This Letter already exists');
    }

    letter.message = message;
    letter.name = name;

    const updateLetter = await this.lettersRepository.save(letter);

    return updateLetter;
  }
}

export default UpdateLetterService;