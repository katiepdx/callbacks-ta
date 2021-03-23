const filter = (array, callback) => {
  let filteredArr = [];
  for (let i = 0; i < array.length; i++) {
    const evenNum = callback(array[i]);
    if (evenNum === true) {
      filteredArr = [...filteredArr, array[i]];
    }
  }
  return filteredArr;
};

module.exports = {
  filter
};
