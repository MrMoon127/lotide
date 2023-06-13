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

* `assertArraysEqual(array, array)    returns: nothing` : prints a message asserting if two arrays are equal or not
* `assertEqual(value, value)          returns: nothing` : prints a message asserting if two values are equal or not
* `assertObjectsEqual(object, object) returns: nothing` : prints a message asserting if two objects are equal or not
* `countLetters(string)               returns: number`  : returns a number that is the number of letters given in the string
* `countOnly(array, object)           returns: object`  : the object must contain keys that are either true or false, the function will then return an object of all the true keys and how many times they in the array
* `eqArrays(array, array)             returns: boolean` : returns true if arrays are equal, false if they are not
* `eqObjects(object, object)          returns: boolean` : returns true if objects are equal, false if they are not
* `findKey(object, function())        returns: string`  : returns the first key that passes the callback given
* `findKeyByValue(object, value)      returns: string`  : returns the first key that matches the value given
* `flatten(array)                     returns: value`   : flattens an array to a single level
* `head(array)                        returns: value`   : returns the first value in an array
* `letterPositions(string)            returns: object`  : returns an object with all letters in the string as keys and with their positions as an array with numbers in it
* `map(array, fucntion())             returns: array`   : returns an array with the callback function applied to each value in the array
* `middle(array)                      returns: array`   : returns the middle of the array as an array, will return one or two values depending on if the argument has an odd or even number of values
* `tail(array)                        returns: array`   : returns an array of all the values in the argument but the first
* `takeUntil(array, function())       returns: array`   : returns an array that contains values of the argument array until the callback function returns true
* `without(array, array)              returns: array`   : removes all elements in the first array that match with the elements in the second array and returns a new array
