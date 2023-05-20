// TEST/ASSERTION FUNCTIONS

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

// ACTUAL FUNCTION
const middle = function(arr) {
  let returnArr = []

  if (arr.length === 1 || arr.length === 2) {
    return returnArr;
  }

  if (arr.length % 2 === 0) {
    let index = (arr.length / 2) - 1;

    returnArr.push(arr[index], arr[index + 1]);
  } else {
    let index = (arr.length / 2) - 0.5;

    returnArr.push(arr[index]);
  }

  return returnArr;
}


// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);