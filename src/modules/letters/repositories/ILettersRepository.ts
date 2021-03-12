import Letter from '@modules/letters/infra/typeorm/models/Letter';
import ICreateLetterDTO from '../dtos/ICreateLetterDTO';

export default interface ILettersRepository {
  create(data: ICreateLetterDTO): Promise<Letter>;
  findByName(name: string): Promise<Letter | undefined>
}