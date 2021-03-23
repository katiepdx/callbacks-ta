const map = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    const newNum = callback(array[i]);
    array[i] = newNum;
  }
  return array;
};

module.exports = {
  map
};
