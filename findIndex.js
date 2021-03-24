const findIndex = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    const boolean = callback(array[i]);
    array[i] = [boolean];

    if (boolean === true) {
      return i;
    }
  }

  // return -1 if above condition isn't met
  return -1;
};

module.exports = {
  findIndex
};
