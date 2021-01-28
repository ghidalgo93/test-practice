function average(array) {
  let avg = array.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
  return avg / array.length;
}

function findMin(array) {
  let min = array.reduce((prev, cur) => {
    if (cur < prev) {
      return cur;
    } else {
      return prev;
    }
  }, array[0]);
  return min;
}

function findMax(array) {
  let max = array.reduce((prev, cur) => {
    if (cur > prev) {
      return cur;
    } else {
      return prev;
    }
  }, array[0]);
  return max;
}

const analyze = (array) => {
  if (!Array.isArray(array)) throw new Error("must be array");
  return {
    average: average(array),
    min: findMin(array),
    max: findMax(array),
    length: array.length,
  };
};

export { analyze, average, findMin };
