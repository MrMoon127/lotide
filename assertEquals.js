// FUNCTION IMPLEMENTATION

const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEquals("Hello World", "Hello World");
assertEquals("Lighthouse Labs", "Bootcamp");
assertEquals(1, 1);
assertEquals(3, 6);