const assertEquals = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }

};

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

assertEquals(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEquals(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEquals(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEquals(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);