const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr1) {
  return arr1[0];
};

assertEquals(3, head([3, 2, 1]));
assertEquals(5, head(3, 4, 7));
assertEquals(head([5,6,7]), 5);
assertEquals(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEquals(head([8]), 8);