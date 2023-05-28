import { assert } from "chai";
import { findAverage } from "./index.js";

function doTest(input, expected) {
  assert.strictEqual(findAverage(input), expected);
}

describe("Calculate Average", () => {
  it("Fixed Tests", () => {
    doTest([1, 1, 1], 1);
    doTest([1, 2, 3], 2);
    doTest([1, 2, 3, 4], 2.5);
  });
});
