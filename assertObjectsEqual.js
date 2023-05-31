// EXTRA CODE
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

const eqObjects = function(object1, object2) {
  //check if the length of the two objects are the same
  if (Object.keys(object1).length === Object.keys(object2).length) {
    //now check if the keys match their values for both objects
    for (const key in object1) {

      //checks if both values are arrays then checks if arrays are equal
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        } else {
          return true;
        }
      // this returns false if only one of the values is an array
      } else if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
        return false;
      }

      if (object1[key] !== object2[key]) {
        return false;
      }
    }

    return true;

  } else {

    return false;

  }
};

// FUCNTION IMPLEMENTATION

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

}

// TEST CASES
let object1 = { a: "1", b: "2" };
let object2 = { b: "2", a: "1" };
assertObjectsEqual(object1 , object2); // equal

let object3 = { a: "2", b: "1" };
assertObjectsEqual(object1, object3); // not equal