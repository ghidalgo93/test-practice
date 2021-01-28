import capitalize from "../src/capitalize";

it("happy path (1): should capitalize the word lower", () => {
  expect(capitalize("lower")).toBe("Lower");
});

it("happy path (2): should capitalize the word upper", () => {
  expect(capitalize("upper")).toBe("Upper");
});

it("capitalizes first alpha chara: '.foo' to '.Foo'", () => {
  expect(capitalize(".foo")).toBe(".Foo");
});

it("returns an empty string when given empty string", () => {
  expect(capitalize("")).toBe("");
});

it("should throw error is imput is not a string", () => {
  expect(capitalize([1, 2, 3])).toBe(undefined);
});
