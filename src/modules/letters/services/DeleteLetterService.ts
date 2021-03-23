import Letter from '@modules/letters/infra/typeorm/models/Letter';
import { ObjectID } from 'mongodb';
import { DeleteResult } from 'typeorm';
import ILettersRepository from '../repositories/ILettersRepository';


class DeleteLetterService {

  constructor(private lettersRepository: ILettersRepository) { }

  public async execute(id: ObjectID): Promise<DeleteResult> {
    const letter = await this.lettersRepository.delete(id);

    return letter;
  }
}

export default DeleteLetterService;