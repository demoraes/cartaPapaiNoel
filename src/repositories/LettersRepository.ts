import Letter from '../models/Letter';

interface CreateLetterDTO {
  name: string;
  message: string;
}

class LettersRepository {
  private letters: Letter[];

  constructor() {
    this.letters = [];
  }

  public all(): Letter[] {
    return this.letters;
  }

  public findByName(name: string): Letter | null {
    const findNameExists = this.letters.find(letter =>
      letter.name === name
    );

    return findNameExists || null;
  }

  public create({ message, name }: CreateLetterDTO): Letter {
    const letter = new Letter({ name, message });

    this.letters.push(letter);

    return letter;
  }
}

export default LettersRepository;