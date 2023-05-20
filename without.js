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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Arrays are equal: ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔⛔⛔Arrays are not equal: ${arr1} !== ${arr2}`);
  }
};

const without = function(source, itemsToRemove) {
  let newArr = [];

  for (const element1 of source) {
    let contains = false;

    for (const element2 of itemsToRemove) {
      if (element1 === element2) {
        contains = true;
      }
    }
    
    if (!contains) {
      newArr.push(element1);
    }

  }

  return newArr;
}

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"])

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);