import { JsonWebTokenError, JwtPayload } from 'jsonwebtoken';
import { TokenFacade } from '../../app/Facades';

describe('TokenFacade', () => {
  let token: string;

  beforeAll(async () => {
    process.env.AUTH_SECRET = 'secret_token';
    token = await TokenFacade.sign({
      email: 'user@test.com',
    });
  });

  it('should generate a token', async () => {
    expect(typeof token).toBe('string');
    expect(token).toBeTruthy();
  });

  it('should contain email property on the payload', async () => {
    // @ts-ignore
    expect(await TokenFacade.verify(token).email).toBe('user@test.com');
  });

  test('audience match', async () => {
    const tokenWithAudience = await TokenFacade.sign({}, {
      audience: 'app',
    });

    expect((await TokenFacade.verify(tokenWithAudience, 'app') as JwtPayload).aud).toBe('app');
  });

  test('audience shouldn\'t match', async () => {
    const tokenWithAudience = await TokenFacade.sign({}, {
      audience: 'api',
    });

    // For some reason, .rejects.toThrow() does not work here
    let errorObject;

    try {
      TokenFacade.verify(tokenWithAudience, 'app');
    } catch (error) {
      errorObject = error;
    }

    expect(errorObject).toBeInstanceOf(JsonWebTokenError);
  });
});
