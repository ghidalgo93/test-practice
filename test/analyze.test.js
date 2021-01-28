import { analyze, average, findMin } from "../src/analyze";

it("happy path (1): [1, 2, 3, 4]", () => {
  expect(analyze([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

it("happy path (2): [1,8,3,4,2,6]", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

it("happy path (3): [8,3,4,2,6]", () => {
  expect(analyze([8, 3, 4, 2, 6])).toEqual({
    average: 4.6,
    min: 2,
    max: 8,
    length: 5,
  });
});

it("throws error if not array", () => {
  expect(() => analyze("1234")).toThrow(Error);
});
