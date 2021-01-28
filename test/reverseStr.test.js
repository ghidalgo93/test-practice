import reverseStr from "../src/reverseStr";

it('happy path (1): returns "rac" from "car"', () => {
  expect(reverseStr("car")).toBe("rac");
});

it("happy path (2): returns tac from cat", () => {
  expect(reverseStr("cat")).toBe("tac");
});

it("works with punctuation", () => {
  expect(reverseStr(".hello?")).toBe("?olleh.");
});

it("throws error if not a string", () => {
  expect(() => reverseStr([1, 2, 3])).toThrow();
});
