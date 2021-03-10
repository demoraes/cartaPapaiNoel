import Letter from '../models/Letter';
import { EntityRepository, MongoRepository } from 'typeorm';

@EntityRepository(Letter)
class LettersRepository extends MongoRepository<Letter> {
  public async findByName(name: string): Promise<Letter | null> {

    const findNameExists = await this.findOne({ name });

    return findNameExists || null;
  }
}

export default LettersRepository;