
const head = require('../head')
const assertEqual = require('../assertEqual')

assertEqual(3, head([3, 2, 1]));
assertEqual(5, head(3, 4, 7));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([8]), 8);