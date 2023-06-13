# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @maninmoon/lotide`

**Require it:**

`const _ = require('@maninmoon/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array, array)`: asserts if two arrays are equal
* `assertEqual(value, value)`: asserts if two values are equal
* `assertObjectsEqual(object, object)`: asserts if two objects are equal
* `countLetters(string)`: returns a number that is the number of letters givien
* `countOnly(array, object)`: takes an array and an object as an argument, allItems and countOnly. the keys in countOnly must be true and will return an object of the count of the key in allItems
* `eqArrays(array, array)`: returns true if arrays are equal
* `eqObjects(object, object)`: returns true if objects are equal
* `findKey(object, function())`: returns the first key that passes the callback given
* `findKeyByValue(object, value)`: returns the first key that matches the value given
* `flatten(array)`: takes an array of arrays and returns an array with the same values without the extra arrays
* `head(array)`: returns the first value in an array
* `letterPositions(string)`: returns an object with all letters in the string as keys and with their positions as an array with numbers in it
* `map(array, fucntion())`: returns an array with the callback function applied to each value in the array
* `middle(array)`: returns the middle of the array as an array, will return one or two values depending on if the argument has an odd or even number of values
* `tail(array)`: returns an array of all the values in the argument but the first
* `takeUntil(array, function())`: returns an array that contains values of the argument array until the callback function returns true
* `without(array, array)`: removes all elements in the first array that match with the elements in the second array
