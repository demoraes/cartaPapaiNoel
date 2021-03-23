import Letter from '@modules/letters/infra/typeorm/models/Letter';
import ICreateLetterDTO from '../dtos/ICreateLetterDTO';
import { ObjectID } from 'mongodb';
import { DeleteResult } from 'typeorm';

export default interface ILettersRepository {
  findByName(name: string): Promise<Letter | undefined>;
  findById(id: ObjectID): Promise<Letter | undefined>;
  save(data: ICreateLetterDTO): Promise<Letter>;
  delete(id: ObjectID): Promise<DeleteResult>;
}