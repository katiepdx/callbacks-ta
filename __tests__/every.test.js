const { every } = require('../every');

describe('tests every function', () => {
  it('should return true is all callbacks meet the condition and return true', () => {
    const callback = number => number === 2 ? true : false;

    const total = every([2, 2, 2, 2, 2], callback);
    expected = true;

    expect(total).toEqual(expected);
  });

  it('should return false if at least one number is not equal to 2', () => {
    const callback = number => number === 2 ? true : false;

    const total = every([2, 2, 3, 2, 2], callback);
    expected = false;

    expect(total).toEqual(expected);
  });

});
