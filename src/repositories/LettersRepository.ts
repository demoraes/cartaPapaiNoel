import Letter from '../models/Letter';

class LettersRepository {
  private letters: Letter[];

  constructor() {
    this.letters = [];
  }

  public findByName(name: string): Letter | null {
    const findNameExists = this.letters.find(letter =>
      letter.name === name
    );

    return findNameExists || null;
  }

  public create(name: string, message: string): Letter {
    const letter = new Letter(name, message);

    this.letters.push(letter);

    return letter;
  }
}

export default LettersRepository;