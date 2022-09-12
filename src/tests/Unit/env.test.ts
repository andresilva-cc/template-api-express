import { env } from '../../app/Utils/env';

describe('env', () => {
  it('should return the defined value', () => {
    process.env.NONEXISTENT = 'aValue';

    expect(env('NONEXISTENT', 'defaultValue')).toBe('aValue');
  });

  it('should return the default value', () => {
    expect(env('ANOTHER_KEY', 'defaultValue')).toBe('defaultValue');
  });
});
