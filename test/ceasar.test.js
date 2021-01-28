import { ceasar, encryptChar } from "../src/ceasar";

it("happy path encryptChar (1): a with key of 1, to be b ", () => {
  expect(encryptChar("a", 1)).toBe("b");
});

it("happy path encryptChar (2): a with key of 2, to be c ", () => {
  expect(encryptChar("a", 2)).toBe("c");
});

it("encryptChar handles wrap around: z with key 1, to be a", () => {
  expect(encryptChar("z", 1)).toBe("a");
});

it("encryptChar handles upper case: A with key 1, to be B", () => {
  expect(encryptChar("A", 1)).toBe("B");
});

it("encryptChar handles wrap around: Z with key 1, to be A", () => {
  expect(encryptChar("Z", 1)).toBe("A");
});

it("encryptChar handles puctuation by not changing: . with key 1, to be .", () => {
  expect(encryptChar(".", 1)).toBe(".");
});

it("happy path ceasar (1): abc with key 1, returns bcd", () => {
  expect(ceasar("abc", 1)).toBe("bcd");
});

it("happy path ceasar (1): bcd with key 1, returns cde", () => {
  expect(ceasar("bcd", 1)).toBe("cde");
});

it("punctuation in ceasar: a.b,c? with key of 1, b.c,d?", () => {
  expect(ceasar("a.b,c?", 1)).toBe("b.c,d?");
});

it("capitalize in ceasar; AbC with key of 1, BcD", () => {
  expect(ceasar("AbC", 1)).toBe("BcD");
});

it("wrap around in ceasar: abz with key of 1, bca", () => {
  expect(ceasar("abz", 1)).toBe("bca");
});

it("happy path ceasar (3) final test: attack at dawn key=5, fyyfhp fy ifbs", () => {
  expect(ceasar("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
});
