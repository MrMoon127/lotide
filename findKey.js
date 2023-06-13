// FUNCTION IMPLEMENTATION
const findKey = function(object, callback) {
  let toReturn;

  for (const key in object) {
    if (callback(object[key])) {
      toReturn = key;
      return toReturn;
    }
  }

  return toReturn;
}


module.exports = findKey;