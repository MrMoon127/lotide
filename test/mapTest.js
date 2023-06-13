const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

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