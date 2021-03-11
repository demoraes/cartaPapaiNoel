import { getMongoRepository, ObjectID as ObjectIDTypeOrm } from 'typeorm';
import { ObjectId } from 'mongodb';
import Letter from '../models/Letter';

interface Request {
  id: ObjectIDTypeOrm | string;
}

class DeleteLetterService {
  public async execute({ id }: Request): Promise<Letter> {
    const lettersRepository = getMongoRepository(Letter);

    if (!ObjectId.isValid(id)) {
      throw Error('This id invalid');
    }

    const idLetter = await lettersRepository.findOne(id);

    if (!idLetter) {
      throw Error('This letter not already exists');
    }

    lettersRepository.delete(id);

    return idLetter;
  }
}

export default DeleteLetterService;