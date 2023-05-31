// EXTRA CODE
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

// FUNCTION IMPLEMENTATION

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

// TEST CASES

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
let test1 = eqObjects(shirtObject , anotherShirtObject); // => true
assertEquals(test1, true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
let test2 = eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEquals(test2, false);

const pantsObject = { color: "blue", size: "medium" };
let test3 = eqObjects(shirtObject, pantsObject); // => false
assertEquals(test3, false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
let test4 = eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEquals(test4, true);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
let test5 = eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEquals(test5, false);