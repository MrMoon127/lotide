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
    console.log(`✅✅✅Nodes are equal: ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔⛔⛔Nodes are not equal: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([], []);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 3, 2], [1, 2, 3]);