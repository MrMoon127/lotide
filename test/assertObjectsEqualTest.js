const assertObjectsEqual = require('../assertObjectsEqual');

let object1 = { a: "1", b: "2" };
let object2 = { b: "2", a: "1" };
assertObjectsEqual(object1 , object2); // equal

let object3 = { a: "2", b: "1" };
assertObjectsEqual(object1, object3); // not equal