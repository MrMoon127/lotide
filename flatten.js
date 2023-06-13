const flatten = function(arr1) {
  let returnArr = [];

  for (const element of arr1) {

    if (Array.isArray(element)) {
      for (const element2 of element) {
        returnArr.push(element2);
      }
    } else {
      returnArr.push(element);
    }

  }

  return returnArr;
}

module.exports = flatten;