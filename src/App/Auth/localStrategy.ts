import { Strategy as LocalStrategy } from 'passport-local';
import { AccountNotActivatedError, InvalidCredentialsError } from '../Errors';
import ErrorParser from '../Errors/ErrorParser';
import { PasswordFacade } from '../Facades';
import { userRepository } from '../Repositories';

// TODO: Remove @ts-ignore comments when repositories return the appropriate model
export default new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email: string, password: string, done: any) => {
  try {
    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError();
    }

    // @ts-ignore
    if (!user.active) {
      throw new AccountNotActivatedError();
    }

    // @ts-ignore
    const passwordMatches = PasswordFacade.compare(password, user.password);

    if (!passwordMatches) {
      throw new InvalidCredentialsError();
    }

    return done(null, {
      id: user.id,
      // @ts-ignore
      email: user.email,
      // @ts-ignore
      name: user.name,
    });
  } catch (ex) {
    return done(ErrorParser.parse(ex));
  }
});
