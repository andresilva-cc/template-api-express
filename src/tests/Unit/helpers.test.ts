import { parseBoolean } from '../../App/Utils/helpers';

describe('helpers', () => {
  describe('parseBoolean', () => {
    it('should return true', () => {
      expect(parseBoolean('true')).toBeTruthy();
      expect(parseBoolean('TRUE')).toBeTruthy();
    });

    it('should return false', () => {
      expect(parseBoolean('false')).toBeFalsy();
      expect(parseBoolean('FALSE')).toBeFalsy();
      expect(parseBoolean('')).toBeFalsy();
    });
  });
});
