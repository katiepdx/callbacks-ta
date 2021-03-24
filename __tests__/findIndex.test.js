const { findIndex } = require('../findIndex');

describe('tests findIndex function', () => {
  it('should return the first index where the number is greater than 4', () => {
    const isGreaterThan4 = (number) => number > 4 ? true : false;

    const index = findIndex([1, 2, 3, 2, 5, 6], isGreaterThan4);
    expected = 4;

    expect(index).toEqual(expected);
  });

  it('should return -1 if no number greater than 4', () => {
    const isGreaterThan4 = (number) => number > 4 ? true : false;

    const index = findIndex([1, 2, 3, 2, 3, 2], isGreaterThan4);
    expected = -1;

    expect(index).toEqual(expected);
  });
});
