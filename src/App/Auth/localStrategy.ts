import { Strategy as LocalStrategy } from 'passport-local';
import { AccountNotActivatedError, InvalidCredentialsError } from '../Errors';
import ErrorParser from '../Errors/ErrorParser';
import { PasswordFacade } from '../Facades';
import { SequelizeUserRepository } from '../Repositories/Implementation';

// TODO: Remove @ts-ignore comments when repositories return the appropriate model
export default new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email: string, password: string, done: any) => {
  try {
    const userRepository = new SequelizeUserRepository();

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError();
    }

    if (!user.active) {
      throw new AccountNotActivatedError();
    }

    const passwordMatches = PasswordFacade.compare(password, user.password);

    if (!passwordMatches) {
      throw new InvalidCredentialsError();
    }

    return done(null, {
      id: user.id,
      email: user.email,
      name: user.name,
    });
  } catch (ex) {
    return done(ErrorParser.parse(ex));
  }
});
