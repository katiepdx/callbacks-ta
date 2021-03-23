const { reduce } = require('../reduce');

describe('tests reduce function', () => {
  it('should return the total of all numbers in the array', () => {
    const addNums = (acc, item) => acc + item;

    const total = reduce([2, 4, 5], addNums);
    expected = 13;

    expect(total).toEqual(expected);
  });
});
