const reduce = (array, callback) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    const newTotal = callback(total, array[i]);
    total = newTotal;
  }
  return total;
};

module.exports = {
  reduce
};
