import Letter from '@modules/letters/infra/typeorm/models/Letter';
import ILettersRepository from '../repositories/ILettersRepository';

interface IRequest {
  name: string;
  message: string;
}


class CreateLetterService {

  constructor(private lettersRepository: ILettersRepository) { }

  public async execute({ message, name }: IRequest): Promise<Letter> {
    const findNameExists = await this.lettersRepository.findByName(name);

    if (findNameExists) {
      throw Error('This name already exists');
    }

    const letter = await this.lettersRepository.create({ message, name });

    return letter;
  }
}

export default CreateLetterService;