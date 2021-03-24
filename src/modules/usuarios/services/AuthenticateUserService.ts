import { sign } from 'jsonwebtoken';
import authConfig from '../../../config/auth';
import { compare } from 'bcryptjs';

import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/models/User';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}


class AuthenticateUserService {
  constructor(private usersRepository: IUsersRepository) { }

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Incorrect email/password combination');
    }

    const passwordMatched = await compare(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination');
    }

    const { expiresIn, secret } = authConfig.jwt;

    
    const token = sign({}, secret, {
      subject: 'user.id',
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
