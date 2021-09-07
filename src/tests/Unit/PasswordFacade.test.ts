import { PasswordFacade } from '../../app/Facades';

describe('PasswordFacade', () => {
  beforeAll(() => {
    process.env.AUTH_SECRET = 'secret_token';
  });

  it('should return a 60 length string hash', () => {
    expect(PasswordFacade.hash('password').length).toBe(60);
  });

  test('password compare', () => {
    const hash = PasswordFacade.hash('secure_password');

    expect(PasswordFacade.compare('secure_password', hash)).toBeTruthy();
  });
});
