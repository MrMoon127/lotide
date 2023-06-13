const findKeyByValue = require('../findKeyByValue');
const assertEqual = require('../assertEqual');

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