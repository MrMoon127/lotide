const assertEqual = require('../assertEqual')
const eqObjects = require('../eqObjects');

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
let test1 = eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(test1, true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
let test2 = eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(test2, false);

const pantsObject = { color: "blue", size: "medium" };
let test3 = eqObjects(shirtObject, pantsObject); // => false
assertEqual(test3, false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
let test4 = eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(test4, true);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
let test5 = eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(test5, false);