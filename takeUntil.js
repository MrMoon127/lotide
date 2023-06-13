const takeUntil = function(array, callback) {
  toReturn = [];
  i = 0;
  
  while (!callback(array[i])) {
    toReturn.push(array[i]);
    i++;
  }

  return toReturn;
}

module.exports = takeUntil;