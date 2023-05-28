import { assert } from 'chai';
import { pillars } from './index.js';

function doTest(input, expected) {
  assert.strictEqual(pillars(...input), expected);
}

describe('Pillars Tests', () => {
  it('Fixed Tests', () => {
    doTest([1, 10, 10], 0);
    doTest([2, 20, 25], 2000);
    doTest([11, 15, 30], 15270);
  });
});
