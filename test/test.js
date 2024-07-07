import assert from "assert";
import { multiply } from "../multiply.js";

describe("multiply exercise", function () {
  it("Should return correct product of numbers - CYCLE 1", function () {
    assert.equal(multiply(1, 1), 1);
  });

  it("Should return correct product of numbers - CYCLE 2", function () {
    assert.equal(multiply(2, 2), 4);
  });

  it("Should return correct product of numbers - CYCLE 3", function () {
    assert.equal(multiply(3, 3), 9);
  });

  it("Should return correct product of numbers - CYCLE 4", function () {
    assert.equal(multiply(4, 4), 16);
  });
});
