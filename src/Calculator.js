const Calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const div = (a, b) => {
    if (b === 0) throw new Error("pls dnt div by zero");
    return a / b;
  };
  const mult = (a, b) => a * b;
  return {
    add,
    sub,
    div,
    mult,
  };
})();

export default Calculator;
