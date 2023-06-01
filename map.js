// TESTING CODE
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

// FUNCTION IMPLMENTATION
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}


// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const results2 = map(words, word => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3])

const double = function(num) {
  return num * 2;
}
const numbers = [1, 2, 3, 4, 5];
const results3 = map(numbers, double);
assertArraysEqual(results3, [2, 4, 6, 8, 10]);