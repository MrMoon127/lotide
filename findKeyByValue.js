// FUNCTION IMPLEMENTATION
const findKeyByValue = function(toScan, toFind) {
  let toReturn = undefined;

  for (const key in toScan) {
    if (toScan[key] === toFind) {
      toReturn = key;
      return toReturn;
    }
  }

  return toReturn;
}


module.exports = findKeyByValue;