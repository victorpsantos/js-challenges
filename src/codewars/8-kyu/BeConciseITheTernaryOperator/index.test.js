import { assert } from "chai";
import { describeAge } from "./index.js";

function doTest(input, expected) {
  assert.strictEqual(describeAge(input), expected);
}

describe("Be Concise I The Ternary Operator", () => {
  it("should still exhibit the exact same behaviour as the function prior to refactoring", () => {
    doTest(9, "You're a(n) kid");
    doTest(10, "You're a(n) kid");
    doTest(11, "You're a(n) kid");
    doTest(12, "You're a(n) kid");
    doTest(13, "You're a(n) teenager");
    doTest(14, "You're a(n) teenager");
    doTest(15, "You're a(n) teenager");
    doTest(16, "You're a(n) teenager");
    doTest(17, "You're a(n) teenager");
    doTest(18, "You're a(n) adult");
    doTest(19, "You're a(n) adult");
    doTest(63, "You're a(n) adult");
    doTest(64, "You're a(n) adult");
    doTest(65, "You're a(n) elderly");
    doTest(66, "You're a(n) elderly");
    doTest(100, "You're a(n) elderly");
  });
});
