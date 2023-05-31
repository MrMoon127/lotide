
// EXTRA CODE FOR TEST FUNCTION
const assertEquals = function(actual, expected) {
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

assertEquals(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEquals(findKeyByValue(bestTVShowsByGenre, "Kung-fu Panda"), "action");
assertEquals(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);