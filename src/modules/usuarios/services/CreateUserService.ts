import IUsersRepository from '../repositories/IUsersRepository';
import { hash } from 'bcryptjs';

import User from '../infra/typeorm/models/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) { }

  public async execute({ email, name, password }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new Error('Email address already used');
    }

    const hashPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashPassword,
    });


    return user;
  }
}

export default CreateUserService;
