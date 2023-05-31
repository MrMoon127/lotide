
// EXTRA CODE FOR TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
const findKeyByValue = function(toScan, toFind) {
  let toReturn = undefined;

  for (const key in toScan) {
    if (toScan[key] === toFind) {
      toReturn = key;
      return toReturn;
    }
  }

  return toReturn;
}


// TEST CASES

const bestTVShowsByGenre = { 
  action: "Kung-fu Panda",
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  martial_arts: "Kung-fu Panda",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Kung-fu Panda"), "action");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);