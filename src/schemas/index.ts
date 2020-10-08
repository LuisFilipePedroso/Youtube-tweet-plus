import { buildSchemaSync } from 'type-graphql';
import Tweet from './Tweet';
import TweetController from '../controllers/TweetController';
import User from './User';
import UserController from '../controllers/UserController';
import Auth from './Auth';
import SessionController from '../controllers/SessionController';

import AuthenticationAssurance from '../middlewares/AuthenticationAssurance';

const schema = buildSchemaSync({
  resolvers: [Tweet, TweetController, User, UserController, Auth, SessionController],
  authChecker: AuthenticationAssurance
})

export default schema;
