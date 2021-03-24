const every = (array, callback) => {
  let overallBoolean;

  for (let i = 0; i < array.length; i++) {
    const boolean = callback(array[i]);
    overallBoolean = boolean;
    if (boolean === false) return false;
  }
  return overallBoolean;
};

module.exports = {
  every
};
