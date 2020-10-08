import {Arg, Mutation, Resolver} from 'type-graphql';

import Auth from '../schemas/Auth';
import MongoUser from '../database/schemas/User';

import { compare } from 'bcryptjs';

import { sign } from 'jsonwebtoken';
import AuthConfig from '../config/auth';

@Resolver(Auth)
class SessionController {

  @Mutation(returns => Auth, {name: 'signIn'})
  async signIn(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const user = await MongoUser.findOne({
      email
    })

    if (!user) {
      throw new Error('Incorrect email/password combination.');
    }

    const passwordMatched = await compare(password, user.password);

    if(!passwordMatched) {
      throw new Error('Incorrect email/password combination.');
    }

    const { secret, expiresIn } = AuthConfig.jwt;

    const token = sign({}, secret, {
      subject: `"${user._id}"`,
      expiresIn
    })

    return {
      token,
      user
    };
  }
}

export default SessionController;
