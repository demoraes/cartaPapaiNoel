import { getRepository, Repository } from 'typeorm';

import ILettersRepository from '@modules/letters/repositories/ILettersRepository';
import ICreateLetterDTO from '@modules/letters/dtos/ICreateLetterDTO';

import Letter from '../models/Letter';

class LettersRepository implements ILettersRepository {
  private ormRepository: Repository<Letter>;

  constructor() {
    this.ormRepository = getRepository(Letter);
  }

  public async findByName(name: string): Promise<Letter | undefined> {
    const findNameExists = await this.ormRepository.findOne({ name });

    return findNameExists || undefined;
  }

  public async create({ name, message }: ICreateLetterDTO): Promise<Letter> {
    const letter = await this.ormRepository.create({ name, message });

    await this.ormRepository.save(letter);

    return letter;
  }
}

export default LettersRepository;