const findIndex = (array, callback) => {
  let checkedArray = [];

  for (let i = 0; i < array.length; i++) {
    const boolean = callback(array[i]);
    checkedArray[i] = [boolean];

    // checks for first matching condition
    if (boolean === true) {
      return i;
    }
  }

  // checks for none of the numbers match the condition
  if (checkedArray.length === array.length) return -1;
};

module.exports = {
  findIndex
};
