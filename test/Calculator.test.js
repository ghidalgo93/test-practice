import Calculator from "../src/Calculator";

it("happy path add (1): add 1 + 2 to be 3", () => {
  expect(Calculator.add(1, 2)).toBe(3);
});

it("happy path add (2): add 5 + -4 to be 3", () => {
  expect(Calculator.add(5, -4)).toBe(1);
});

it("happy path sub (1) sub 1 - 2 to be -1", () => {
  expect(Calculator.sub(1, 2)).toBe(-1);
});

it("happy path sub (2): sub -5 - -4 to be -1", () => {
  expect(Calculator.sub(-5, -4)).toBe(-1);
});

it("happy path div (1): div 1/2 to be 0.5", () => {
  expect(Calculator.div(1, 2)).toBe(0.5);
});

it("div throws err if div by zero", () => {
  expect(() => Calculator.div(1, 0)).toThrow();
});

it("div gives 0 for zero div by...", () => {
  expect(Calculator.div(0, 1)).toBe(0);
});

it("happy path mult (1): 1 * 2 = 2", () => {
  expect(Calculator.mult(1, 2)).toBe(2);
});

it("happy path mult (2): -5 * 2 = -10", () => {
  expect(Calculator.mult(-5, 2)).toBe(-10);
});
