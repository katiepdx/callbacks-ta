const { filter } = require('../filter');

describe('tests filter function', () => {
  it('should return a new array of filtered out even numbers', () => {
    const checkIsEven = (number) => number % 2 === 0

    const filteredArray = filter([1, 2, 3, 4, 5, 6], checkIsEven);
    expected = [2, 4, 6]
    expect(filteredArray).toEqual(expected);
  });

  it('should return a new array of filtered out numbers greater than 10', () => {
    const isGreaterThan10 = (number) => {
      if(number > 10) return true
    }

    const filteredArray = filter([1, 20, 3, 40, 5, 60], isGreaterThan10);
    expected = [20, 40, 60]
    expect(filteredArray).toEqual(expected);
  });
});
