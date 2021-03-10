import { uuid } from 'uuidv4';

class Letter {
  id: string;

  name: string;

  message: string;

  constructor({ name, message }: Omit<Letter, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.message = message;
  }
}

export default Letter;