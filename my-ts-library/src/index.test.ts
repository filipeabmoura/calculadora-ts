import { expect, test } from "vitest";
import { add, subtract, multiply, divide } from "../src/index";

test("add function", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract function", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("multiply function", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("divide function", () => {
  expect(divide(6, 3)).toBe(2);
  expect(() => divide(6, 0)).toThrow("Division by zero is not allowed.");
});
