import { IUser } from '../database/schemas/User';
import User from './User';
import {Field, ObjectType} from 'type-graphql';

interface IAuth {
  token: string;
  user: IUser;
}

@ObjectType()
class Auth implements IAuth {

  @Field({ nullable: false })
  token: string;

  @Field(type => User, { nullable: false })
  user: User;
}

export default Auth;
