
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it ("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    let input = ['Hello', 'Lighthouse', 'Labs'];
    let expectedOutput = ['Lighthouse', 'Labs'];

    assert.deepEqual(tail(input), expectedOutput);
  });
});