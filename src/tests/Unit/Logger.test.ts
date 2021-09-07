/* eslint-disable no-console */

import Logger from '../../app/Utils/Logger';

describe('Logger', () => {
  beforeAll(() => {
    console.log = jest.fn();
    process.env.APP_ENV = 'test';
  });

  it('should log the text "Server started"', () => {
    Logger.info('Server started');

    expect(String((console.log as jest.Mock).mock.calls[0])).toContain(('Server started'));
  });

  it('should log two parameters (icon and text)', () => {
    Logger.success('Server started');

    expect((console.log as jest.Mock).mock.calls[0].length).toBe(2);
  });

  test('both parameters are string', () => {
    Logger.warning('Be careful!');

    expect(typeof (console.log as jest.Mock).mock.calls[0][0]).toBe('string');
    expect(typeof (console.log as jest.Mock).mock.calls[0][1]).toBe('string');
  });

  it('should log icon', () => {
    Logger.error('Fatal error');

    expect((console.log as jest.Mock).mock.calls[0][0].length).not.toBe('Fatal error');
  });
});
