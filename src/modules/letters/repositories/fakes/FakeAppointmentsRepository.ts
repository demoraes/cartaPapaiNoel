import ILettersRepository from '@modules/letters/repositories/ILettersRepository';
import ICreateLetterDTO from '@modules/letters/dtos/ICreateLetterDTO';

import Letter from '../../infra/typeorm/models/Letter';
import { ObjectID } from 'mongodb';
import { DeleteResult } from 'typeorm';

class LettersRepository implements ILettersRepository {
  private letters: Letter[] = [];

  public async findAll(): Promise<Letter | undefined> {
    const findAllLetters = this.letters.find(letter => letter);

    return findAllLetters;
  }

  public async findByName(name: string): Promise<Letter | undefined> {
    const findName = this.letters.find(
      letter => letter.name === name,
    );

    return findName;
  }

  public async create({ message, name }: ICreateLetterDTO): Promise<Letter> {
    var mongoose = require('mongoose');
    var objectId = mongoose.Types.ObjectId('569ed8269353e9f4c51617aa');

    const letter = new Letter();

    //letter.id = objectId;

    Object.assign(letter, { id: objectId, name, message });

    this.letters.push(letter);

    return letter;
  }

  public async save(letter: Letter): Promise<Letter> {
    const findIndex = this.letters.findIndex(findLetter => findLetter.id === letter.id);

    this.letters[findIndex] = letter;

    return letter;
  }

  public async deleteLetter(id: ObjectID): Promise<DeleteResult | Letter[]> {
    var mongoose = require('mongoose');
    var objectId = mongoose.Types.ObjectId('569ed8269353e9f4c51617aa');

    const findIndex = this.letters.findIndex(findLetter => findLetter.id === objectId);
    
    return this.letters.splice(findIndex, objectId);
  }

  public async findById(id: ObjectID): Promise<Letter | undefined> {
    const findId = this.letters.find(
      letter => letter.id === id,
    );

    return findId;
  }

}

export default LettersRepository;