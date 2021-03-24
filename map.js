const map = (array, callback) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const newNum = callback(array[i]);
    newArray = [...newArray, newNum]
  }
  return newArray;
};

module.exports = {
  map
};
