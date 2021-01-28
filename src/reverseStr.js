function reverseStr(str) {
  if (typeof str !== "string") {
    throw new Error("parameter is not a string");
  }
  let tmpStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    tmpStr = tmpStr.concat(str[i]);
  }
  return tmpStr;
}

export default reverseStr;
