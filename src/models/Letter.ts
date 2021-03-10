import { uuid } from 'uuidv4';

class Letter {
  id: string;

  name: string;

  message: string;

  constructor(name: string, message: string) {
    this.id = uuid();
    this.name = name;
    this.message = message;
  }
}

export default Letter;