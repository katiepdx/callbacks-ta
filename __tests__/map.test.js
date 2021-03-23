const { map } = require('../map');

describe('tests map function', () => {
  it('should double each number in the array', () => {
    const double = (number) => number * 2;
    const expected = [2, 4, 8];
    const mapped = map([1, 2, 4], double);

    expect(mapped).toEqual(expected);
  });

  it('should add two to each number in the array', () => {
    const addTwo = (number) => number + 2;
    const expected = [3, 4, 6];
    const mapped = map([1, 2, 4], addTwo);

    expect(mapped).toEqual(expected);
  });
});
