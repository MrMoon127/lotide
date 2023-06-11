
const { expect } = require('chai');
const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it ("returns [] for [1]", () => {
    let input = [1];
    let expectedOutput = [];

    assert.deepEqual(middle(input), expectedOutput);
  })

  it ("returns [] fo [1, 2]", () => {
    let input = [1, 2];
    let expectedOutput = [];

    assert.deepEqual(middle(input), expectedOutput);
  })

  it ("returns [3] for [1, 2, 3, 4, 5]", () => {
    let input = [1, 2, 3, 4, 5];
    let expectedOutput = [3];

    assert.deepEqual(middle(input), expectedOutput);
  })

  it ("returns [2, 3] for [1, 2, 3, 4]", () => {
    input = [1, 2, 3, 4];
    expectedOutput = [2, 3];

    assert.deepEqual(middle(input), expectedOutput);
  })
})