const eqArrays = function(arr1, arr2) {
  // if the two arrays are not the same length they cannot be equal
  if (arr1.length !== arr2.length) {
    return false;
  }

  // we don't need another loop to check arr2 because they should be the same in each position
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // we've determined all false senarios, so it must be true
  return true;

};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Arrays are equal: ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔⛔⛔Arrays are not equal: ${arr1} !== ${arr2}`);
  }
};

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

console.log(flatten([1, 2, [3, 4], 5, [6]]))