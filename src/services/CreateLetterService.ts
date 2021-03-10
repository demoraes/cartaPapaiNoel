import Letter from '../models/Letter';
import lettersRepository from '../repositories/LettersRepository';

interface Request {
  name: string;
  message: string;
}

class CreateLetterService {
  private lettersRepository: lettersRepository;

  constructor(lettersRepository: lettersRepository) {
    this.lettersRepository = lettersRepository;
  }

  public execute({ message, name }: Request): Letter {

    const findNameExists = this.lettersRepository.findByName(name);

    if (findNameExists) {
      throw Error('This name already exists');
    }

    const letter = this.lettersRepository.create({ name, message });

    return letter;
  }
}

export default CreateLetterService;