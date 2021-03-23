import { DeleteResult, getMongoRepository, MongoRepository } from 'typeorm';

import ILettersRepository from '@modules/letters/repositories/ILettersRepository';
import ICreateLetterDTO from '@modules/letters/dtos/ICreateLetterDTO';

import Letter from '../models/Letter';
import { ObjectId } from 'mongodb';

class LettersRepository implements ILettersRepository {
  private ormRepository: MongoRepository<Letter>;

  constructor() {
    this.ormRepository = getMongoRepository(Letter);
  }

  public async findAll(): Promise<Letter[] | undefined> {
    const findNameExists = await this.ormRepository.find();

    return findNameExists || undefined;
  }

  public async findByName(name: string): Promise<Letter | undefined> {
    const findNameExists = await this.ormRepository.findOne({ name });

    return findNameExists || undefined;
  }

  public async create({ message, name }: ICreateLetterDTO): Promise<Letter> {
    const letter = this.ormRepository.create({ name, message });

    await this.ormRepository.save(letter);

    return letter;
  }

  public async save(letter: Letter): Promise<Letter> {
    return await this.ormRepository.save(letter);
  }

  public async deleteLetter(id: ObjectId): Promise<DeleteResult> {
    const letter = this.ormRepository.delete({ id });

    return letter;
  }

  public async findById(id: ObjectId): Promise<Letter | undefined> {
    const letter = this.ormRepository.findOne({ where: id });

    return letter;
  }

}

export default LettersRepository;