// EXTRA CODE

const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;